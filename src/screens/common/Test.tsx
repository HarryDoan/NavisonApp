import {COLORS} from '@theme';
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Svg, Path, Line} from 'react-native-svg';


const _renderItem = ({item, index}:any) =>{
  return(
    
  )
}

const CandlestickChart = ({data}: any) => {
  // Calculate chart dimensions
  const chartWidth = 400;
  const chartHeight = 200;
  const margin = 10;
  const candleWidth = 12;

  // Calculate chart scale
  const maxPrice = Math.max(...data.map(item => item.high));
  const minPrice = Math.min(...data.map(item => item.low));
  const priceRange = maxPrice - minPrice;

  const scaleY = value =>
    ((maxPrice - value) / priceRange) * (chartHeight - 2 * margin);
  const scaleX = index => margin + index * candleWidth;

  // Calculate axis labels
  const yAxisLabels = Array.from(
    {length: 5},
    (_, i) => minPrice + (i / 4) * priceRange,
  );
  const xAxisLabels = data
    .filter((item, index) => index % 4 === 0)
    .map(item => item.date);

  // Gesture state
  const [price, setPrice] = useState(null);

  const handleTouchStart = event => {
    const x = event.nativeEvent.locationX - margin;
    const index = Math.floor(x / candleWidth);
    if (index >= 0 && index < data.length) {
      const item = data[index];
      setPrice(item.close);
    } else {
      setPrice(null);
    }
  };

  const handleTouchMove = event => {
    const x = event.nativeEvent.locationX - margin;
    const index = Math.floor(x / candleWidth);
    if (index >= 0 && index < data.length) {
      const item = data[index];
      setPrice(item.close);
    } else {
      setPrice(null);
    }
  };

  const handleTouchEnd = () => {
    setPrice(null);
  };

  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.bg_primary,
      }}
      horizontal>
      <View
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <Svg width={2 * chartWidth} height={chartHeight}>
          {/* Y-axis */}
          <Line
            x1={margin}
            y1={margin}
            x2={margin}
            y2={chartHeight - margin}
            stroke="#000000"
            strokeWidth={1}
          />
          {yAxisLabels.map((label, index) => (
            <Text
              key={index}
              style={{
                position: 'absolute',
                top: scaleY(label) + margin - 7,
                left: 0,
                color: '#000000',
                fontSize: 10,
                textAlign: 'center',
              }}>
              {label.toFixed(2)}
            </Text>
          ))}

          {/* X-axis */}
          <Line
            x1={margin}
            y1={chartHeight - margin}
            x2={chartWidth - margin}
            y2={chartHeight - margin}
            stroke="#000000"
            strokeWidth={1}
          />
          {xAxisLabels.map((label, index) => (
            <Text
              key={index}
              style={{
                position: 'absolute',
                top: chartHeight - margin + 5,
                left: scaleX(index),
                color: '#000000',
                fontSize: 10,
                textAlign: 'center',
              }}>
              {label}
            </Text>
          ))}

          {data.map((item, index) => {
            const x = scaleX(index);
            const yOpen = scaleY(item.open);
            const yClose = scaleY(item.close);
            const yHigh = scaleY(item.high);
            const yLow = scaleY(item.low);

            const isBullish = item.close > item.open;
            const color = isBullish ? '#00ff00' : '#ff0000';

            return (
              <View key={index}>
                {/* Candle body */}
                <Path
                  d={`M${x},${yOpen} L${x},${yClose} L${
                    x + candleWidth
                  },${yClose} L${x + candleWidth},${yOpen}`}
                  fill={color}
                />

                {/* High and low lines */}
                <Line
                  x1={x + candleWidth / 2}
                  y1={yHigh}
                  x2={x + candleWidth / 2}
                  y2={yLow}
                  stroke={color}
                />

                {/* Day label */}
                {item.day === 1 && (
                  <Text
                    style={{
                      position: 'absolute',
                      top: yHigh - 15,
                      left: x + candleWidth / 2,
                      color: '#000000',
                      fontSize: 10,
                      textAlign: 'center',
                    }}>
                    {/* Day {item.day} */}
                  </Text>
                )}
              </View>
            );
          })}
        </Svg>
        <Text style={{alignSelf: 'center', marginTop: 10}}>
          {price !== null ? `Price: ${price.toFixed(2)}` : ''}
        </Text>
      </View>
    </ScrollView>

    
  );
};

export default CandlestickChart;
