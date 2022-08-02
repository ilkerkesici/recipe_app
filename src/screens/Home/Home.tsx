import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Spinner, Text, Header, Button} from 'components/CoreComponents';
import styled from 'styled-components/native';
import strings from 'assets/strings';
import {Recipe} from 'myModule/interfaces/recipe';
import colors from 'assets/colors';
import useHomeHook from './useHomeHook';

export default function Home() {
  const {loading, recipes, keyExtractor, onPressStock} = useHomeHook();

  const renderItem = useCallback(
    ({item}: {item: Recipe}) => (
      <RecipeCard testID={`recipe_card_${item.id}`}>
        <Text>{item.name}</Text>
      </RecipeCard>
    ),
    [],
  );

  const renderItemSeperator = useCallback(() => <Seperator />, []);

  return (
    <Container>
      <Header title={strings.home} />
      <Spinner loading={loading} />
      <FlatList
        data={recipes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeperator}
        contentContainerStyle={styles.flatlistContentContainer}
      />
      <ButtonWrapper>
        <Button onPress={onPressStock} text={strings.go_to_stock} />
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`;

const RecipeCard = styled.TouchableOpacity`
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
const ButtonWrapper = styled.View`
  padding-horizontal: 24px;
  padding-vertical: 10px;
  align-self: stretch;
`;

const styles = StyleSheet.create({
  flatlistContentContainer: {
    paddingVertical: 20,
  },
});
