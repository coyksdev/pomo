import {format} from 'date-fns';
import {Box, Input} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {CreateTaskField} from '../types';

type DateTimePickerProps = {
  control: Control<CreateTaskField, any>;
  controlName: keyof CreateTaskField;
  icon: React.ReactNode;
  onConfirm: (date: Date) => void;
  mode: 'date' | 'time';
  placeholder: string;
};

function DateTimePicker({
  control,
  icon,
  onConfirm,
  mode,
  controlName,
  placeholder,
}: DateTimePickerProps) {
  const [showDate, setShowDate] = React.useState(false);

  const formatValue = (value: Date) => {
    if (mode === 'date') {
      return format(value, 'dd/MM/yyyy');
    }

    return format(value, 'hh:mm aaa');
  };

  return (
    <Controller
      control={control}
      name={controlName}
      render={({field: {value}}) => {
        return (
          <>
            <Input
              fontSize={18}
              editable={false}
              placeholder={placeholder}
              borderRadius={12}
              bgColor={'gray.50'}
              borderWidth={0}
              value={
                value && typeof value === 'object'
                  ? formatValue(value)
                  : undefined
              }
              InputRightElement={
                <TouchableOpacity
                  onPress={() => {
                    setShowDate(true);
                  }}>
                  <Box pr={2}>{icon}</Box>
                </TouchableOpacity>
              }
            />
            <DatePicker
              minimumDate={new Date()}
              modal
              open={showDate}
              date={new Date()}
              mode={mode}
              onConfirm={date => {
                onConfirm(date);
                setShowDate(false);
              }}
              onCancel={() => {
                setShowDate(false);
              }}
            />
          </>
        );
      }}
    />
  );
}

export {DateTimePicker};
