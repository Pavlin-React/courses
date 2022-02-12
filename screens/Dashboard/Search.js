import React, {useRef} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {FlatList} from 'react-native-gesture-handler';
import {TextButton, CategoryCard} from '../../components';
import {COLORS, FONTS, SIZES, icons, dummyData} from '../../constants';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Search = () => {
  let scrollViewRef = useRef();
  let renderTopSearches = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Top Searches
        </Text>
        <FlatList
          horizontal
          data={dummyData.top_searches}
          listKey="TopSearches"
          keyExtractor={item => `TopSearches-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
            <TextButton
              label={item.label}
              contentContainerStyle={{
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index === dummyData.top_searches.length - 1
                    ? SIZES.radius
                    : 0,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray10,
              }}
              labelStyle={{
                color: COLORS.gray50,
                ...FONTS.h3,
              }}
            />
          )}
        />
      </View>
    );
  };

  let renderBrowseCategories = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Browse Categories
        </Text>
        <FlatList
          data={dummyData.categories}
          numColumns={2}
          scrollEnabled={false}
          listKey="BrowseCategory"
          keyExtractor={item => `BrowseCategory-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
            <CategoryCard
              category={item}
              containerStyle={{
                height: 130,
                width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
                marginTop: SIZES.radius,
                marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding,
              }}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          marginTop: 100,
          paddingBottom: 300,
        }}
        scrollEventThrottle={16}
        keyboardDismissMode={false}
        // onScroll
        // onScrollEndDrag
      >
        {/* Top Searches */}
        {renderTopSearches()}
        {/* Browse Categories */}
        {renderBrowseCategories()}
      </Animated.ScrollView>
    </View>
  );
};

export default Search;
