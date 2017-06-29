import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Page = ({ width, height, children }) => (
  <View style={{ width, height }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageData = ({ isLight, image, title, subtitle, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <Text style={{ ...styles.title, ...(isLight ? styles.titleLight : {}) }}>
        {title}
      </Text>
      <Text style={{ ...styles.subtitle, ...(isLight ? styles.subtitleLight : {}), padding: 25 }}>
        {subtitle}
      </Text>
    </PageContent>
  </Page>
);

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // flex: 0,
    marginBottom: 20,
    width: width,
    height: width/1.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    paddingBottom: 15,
  },
  titleLight: {
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
};

export default PageData;
