import React from 'react';

import {HStack, Text, Spacer} from 'native-base';

interface AppBarProps extends React.ComponentProps<typeof HStack> {
  children?: React.ReactNode;
  leading?: React.ReactNode;
  title?: string;
  trailing?: React.ReactNode;
}

function AppBar(props: AppBarProps) {
  return (
    <HStack alignItems="center" space={2} px={5} py={3}>
      {props.leading}
      <Text fontWeight={'bold'} fontSize={24}>
        {props.title}
      </Text>
      <Spacer />
      {props.trailing}
    </HStack>
  );
}

export {AppBar};
