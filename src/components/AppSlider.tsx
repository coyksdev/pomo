import React, {useCallback} from 'react';
import {Box, Text, VStack} from 'native-base';
import RangeSlider from 'rn-range-slider';

import SliderBubble from '../../assets/svgs/Slider-Bubble.svg';

function Thumb() {
  return (
    <Box
      borderColor={'#FF575C'}
      borderWidth={3}
      bg="white"
      w={5}
      h={5}
      borderRadius={50}
    />
  );
}

function Rail() {
  return <Box bg="gray.200" h={2} width={'100%'} borderRadius={5} />;
}

function Label({value}: {value: string}) {
  return (
    <VStack justifyItems={'center'} alignItems={'center'}>
      <SliderBubble width={30} />
      <Text color={'white'} position={'absolute'}>
        {value}
      </Text>
    </VStack>
  );
}

type AppSliderProps = {
  max: number;
  onChange: (value: number) => void;
};

function AppSlider({max, onChange}: AppSliderProps) {
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <Rail />, []);
  const renderLabel = useCallback(value => <Label value={value} />, []);

  return (
    <RangeSlider
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: '100%'}}
      min={1}
      max={max}
      step={1}
      floatingLabel
      disableRange
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      onValueChanged={onChange}
    />
  );
}

export {AppSlider};
