import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Header, Spinner, Text} from 'components/CoreComponents';
import strings from 'assets/strings';
import useStockHook from './useStockHook';
import colors from 'assets/colors';
import {Stock} from 'myModule/interfaces/stock';

export default function StockScreen() {
  const {onPressBack, stocks, loading, keyExtractor} = useStockHook();

  const renderItem = useCallback(
    ({item}: {item: Stock}) => (
      <StockCard testID={`stock_card_${item.id}`}>
        <Text>{item.name}</Text>
      </StockCard>
    ),
    [],
  );

  const renderItemSeperator = useCallback(() => <Seperator />, []);

  return (
    <Container>
      <Header
        leftIconOnPress={onPressBack}
        leftIcon="back"
        title={strings.stock}
      />
      <Spinner loading={loading} />
      <FlatList
        data={stocks}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeperator}
        contentContainerStyle={styles.flatlistContentContainer}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`;

const StockCard = styled.View`
  margin-horizontal: 24px;
  padding: 10px;
  border-width: 1px;
  border-color: ${colors.black27};
  align-items: center;
  border-radius: 4px;
`;

const Seperator = styled.View`
  height: 16px;
`;

const styles = StyleSheet.create({
  flatlistContentContainer: {
    paddingVertical: 20,
  },
});
