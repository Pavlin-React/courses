import {TouchableOpacity, Text, ImageBackground} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import React from 'react';

const CategoryCard = ({category, containerStyle}) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
          width: 200,
          height: 150,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: 'flex-end',
          ...containerStyle,
        }}>
          <Text style={{color: COLORS.white, ...FONTS.h2}} >{category?.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
