import {useNavigation} from '@react-navigation/native';
import {Stock} from 'myModule/interfaces/stock';
import {useCallback, useEffect, useState} from 'react';
import {StockService} from 'myModule';

interface ReturnType {
  onPressBack: () => void;
  keyExtractor: (item: Stock) => string;
  stocks: Stock[];
  loading: boolean;
}

export default function useStockHook(): ReturnType {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const keyExtractor = useCallback((item: Stock) => item.id.toString(), []);

  const getStockData = useCallback(async () => {
    setLoading(true);
    const stockResponse = await StockService.getStockAll();
    setLoading(false);
    setStocks(stockResponse);
  }, []);

  useEffect(() => {
    getStockData();
  }, [getStockData]);

  return {onPressBack, keyExtractor, loading, stocks};
}
