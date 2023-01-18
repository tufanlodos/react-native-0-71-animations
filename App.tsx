import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TimingOpacity from './examples/TimingOpacity';
import TranslatePosition from './examples/TimingTranslatePosition';
import Scale from './examples/TimingScale';
import WidthHeight from './examples/TimingWidthHeight';
import Positioning from './examples/TimingAbsolute';
import Coloring from './examples/TimingColor';
import Rotating from './examples/TimingRotation';
import WidthHeightPercentage from './examples/TimingWidthHeightPercentage';
import TimingWithEasing from './examples/TimingWithEasing';
import Spring from './examples/Spring';
import TimingLoop from './examples/TimingLoop';
import Event from './examples/Event';
import Decay from './examples/Decay(DragDrop)';
import Shake from './examples/Shake';
import Add from './examples/Add';
import Divide from './examples/Divide';
import Multiply from './examples/Multiply';
import Modulo from './examples/Modulo';
import Parallel from './examples/Parallel';
import Sequence from './examples/Sequence';
import Stagger from './examples/Stagger';
import Delay from './examples/Delay';
import InterpolateNumber from './examples/InterpolateNumber';
import InterpolateColors from './examples/InterpolateColors';
import InterpolateRotation from './examples/InterpolateRotation';
import Extrapolate from './examples/Extrapolate';

const DETAILS = {
  0: 'TimingOpacity',
  1: 'TimingTranslatePosition',
  2: 'TimingScale',
  3: 'TimingWidthHeight',
  4: 'TimingAbsolute',
  5: 'TimingColor',
  6: 'TimingRotation',
  7: 'TimingWidthHeightPercentage',
  8: 'TimingWithEasing',
  9: 'Spring',
  10: 'TimingLoop',
  11: 'Event',
  12: 'Decay',
  13: 'Shake',
  14: 'Add',
  15: 'Divide',
  16: 'Multiply',
  17: 'Modulo',
  18: 'Parallel',
  19: 'Sequence',
  20: 'Stagger',
  21: 'Delay',
  22: 'InterpolateNumber',
  23: 'InterpolateColors',
  24: 'InterpolateRotation',
  25: 'Extrapolate',
};

const App = () => {
  const [showDetail, setShowDetail] = useState<string | null>(null);
  return (
    <SafeAreaView style={styles.f1}>
      {showDetail === null ? (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Examples</Text>
              <Button
                title="Opacity"
                onPress={() => setShowDetail(DETAILS[0])}
              />
              <View style={styles.mb10} />
              <Button
                title="TranslatePosition"
                onPress={() => setShowDetail(DETAILS[1])}
              />
              <View style={styles.mb10} />
              <Button title="Scale" onPress={() => setShowDetail(DETAILS[2])} />
              <View style={styles.mb10} />
              <Button
                title="Width-Height"
                onPress={() => setShowDetail(DETAILS[3])}
              />
              <View style={styles.mb10} />
              <Button
                title="Positioning"
                onPress={() => setShowDetail(DETAILS[4])}
              />
              <View style={styles.mb10} />
              <Button
                title="Color-Background Color"
                onPress={() => setShowDetail(DETAILS[5])}
              />
              <View style={styles.mb10} />
              <Button
                title="Rotating"
                onPress={() => setShowDetail(DETAILS[6])}
              />
              <View style={styles.mb10} />
              <Button
                title="Width-Height Percentage"
                onPress={() => setShowDetail(DETAILS[7])}
              />
              <View style={styles.mb10} />
              <Button
                title="Timing With Easing"
                onPress={() => setShowDetail(DETAILS[8])}
              />
              <View style={styles.mb10} />
              <Button
                title="Spring"
                onPress={() => setShowDetail(DETAILS[9])}
              />
              <View style={styles.mb10} />
              <Button
                title="Timing Loop"
                onPress={() => setShowDetail(DETAILS[10])}
              />
              <View style={styles.mb10} />
              <Button
                title="Event"
                onPress={() => setShowDetail(DETAILS[11])}
              />
              <View style={styles.mb10} />
              <Button
                title="Decay (DragDrop And Release)"
                onPress={() => setShowDetail(DETAILS[12])}
              />
              <View style={styles.mb10} />
              <Button
                title="Shake"
                onPress={() => setShowDetail(DETAILS[13])}
              />
              <View style={styles.mb10} />
              <Button
                title="Add (Math)"
                onPress={() => setShowDetail(DETAILS[14])}
              />
              <View style={styles.mb10} />
              <Button
                title="Divide (Math)"
                onPress={() => setShowDetail(DETAILS[15])}
              />
              <View style={styles.mb10} />
              <Button
                title="Multiply (Math)"
                onPress={() => setShowDetail(DETAILS[16])}
              />
              <View style={styles.mb10} />
              <Button
                title="Modulo (Math)"
                onPress={() => setShowDetail(DETAILS[17])}
              />
              <View style={styles.mb10} />
              <Button
                title="Parallel"
                onPress={() => setShowDetail(DETAILS[18])}
              />
              <View style={styles.mb10} />
              <Button
                title="Sequence"
                onPress={() => setShowDetail(DETAILS[19])}
              />
              <View style={styles.mb10} />
              <Button
                title="Stagger"
                onPress={() => setShowDetail(DETAILS[20])}
              />
              <View style={styles.mb10} />
              <Button
                title="Delay"
                onPress={() => setShowDetail(DETAILS[21])}
              />
              <View style={styles.mb10} />
              <Button
                title="Interpolate Number"
                onPress={() => setShowDetail(DETAILS[22])}
              />
              <View style={styles.mb10} />
              <Button
                title="Interpolate Colors"
                onPress={() => setShowDetail(DETAILS[23])}
              />
              <View style={styles.mb10} />
              <Button
                title="Interpolate Rotation"
                onPress={() => setShowDetail(DETAILS[24])}
              />
              <View style={styles.mb10} />
              <Button
                title="Extrapolate"
                onPress={() => setShowDetail(DETAILS[25])}
              />
              <View style={styles.mb10} />
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.f1}>
          <View style={styles.f0}>
            <Button title="Back" onPress={() => setShowDetail(null)} />
          </View>
          <View style={styles.f1}>
            {showDetail === DETAILS[0] ? (
              <TimingOpacity />
            ) : showDetail === DETAILS[1] ? (
              <TranslatePosition />
            ) : showDetail === DETAILS[2] ? (
              <Scale />
            ) : showDetail === DETAILS[3] ? (
              <WidthHeight />
            ) : showDetail === DETAILS[4] ? (
              <Positioning />
            ) : showDetail === DETAILS[5] ? (
              <Coloring />
            ) : showDetail === DETAILS[6] ? (
              <Rotating />
            ) : showDetail === DETAILS[7] ? (
              <WidthHeightPercentage />
            ) : showDetail === DETAILS[8] ? (
              <TimingWithEasing />
            ) : showDetail === DETAILS[9] ? (
              <Spring />
            ) : showDetail === DETAILS[10] ? (
              <TimingLoop />
            ) : showDetail === DETAILS[11] ? (
              <Event />
            ) : showDetail === DETAILS[12] ? (
              <Decay />
            ) : showDetail === DETAILS[13] ? (
              <Shake />
            ) : showDetail === DETAILS[14] ? (
              <Add />
            ) : showDetail === DETAILS[15] ? (
              <Divide />
            ) : showDetail === DETAILS[16] ? (
              <Multiply />
            ) : showDetail === DETAILS[17] ? (
              <Modulo />
            ) : showDetail === DETAILS[18] ? (
              <Parallel />
            ) : showDetail === DETAILS[19] ? (
              <Sequence />
            ) : showDetail === DETAILS[20] ? (
              <Stagger />
            ) : showDetail === DETAILS[21] ? (
              <Delay />
            ) : showDetail === DETAILS[22] ? (
              <InterpolateNumber />
            ) : showDetail === DETAILS[23] ? (
              <InterpolateColors />
            ) : showDetail === DETAILS[24] ? (
              <InterpolateRotation />
            ) : showDetail === DETAILS[25] ? (
              <Extrapolate />
            ) : null}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  f0: {
    flex: 0,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  mb10: {
    marginBottom: 10,
  },
});

export default App;
