import metrics from '../config/metrics';
import { Platform } from 'react-native';

export default ({
  color = Platform.OS === 'android' ? '#1b91ff' : '#ffffff',
  opacity = 0.15,
  x = 0,
  y = 2,
  widthP = 100,
  widthM = 20,
  height,
  border = 6.6,
  radius,
}) => ({
  color,
  opacity,
  x,
  y,
  width: (metrics.screenWidth * widthP) / 100 - widthM * 2,
  height,
  border,
  radius,
});
