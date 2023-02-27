import {useEffect, useState, useCallback} from "react";
import { Audio } from 'expo-av';

function usePlayAlarm() {
  const [sound, setSound] = useState<Audio.Sound | undefined>();

  useEffect(() => {
    const loadSound = async () => {
      console.log('load sound');
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/alarm.wav')
      );
      setSound(sound);
    }

    loadSound();

    return () => {
      sound?.unloadAsync();
    }
  }, []);

  const playSound = useCallback(async () => {
    await sound?.playAsync();
  }, [sound?.playAsync]);

  const stopSound = useCallback(async () => {
    await sound?.unloadAsync();
  }, [sound?.unloadAsync]);

  return {playSound, stopSound};
}

export {usePlayAlarm};