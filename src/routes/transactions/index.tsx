import { useEffect, useState, useCallback } from 'react';

import PageTitle from 'src/components/PageTitle';
import TransactionList from './TransactionList';
import TransactionFooter from './TransactionFooter';

export type Transaction = {
  Date: string;
  IsPay: boolean;
  PanFullName: string;
  PayType: string;
  PhoneNumber: string;
  Price: number;
  ShareText: string;
  TypeName: string;
}

export interface Filters {
  IsPay: boolean | null
  PayType: string | null
}

const filterObject: Filters = {
  IsPay: null,
  PayType: null
}

export interface SortItem {
  key: string
  text: string
}

const sortList: SortItem[] = [
  { key: 'time', text: 'براساس زمان(تراکنش‌های جدید)' },
  { key: 'highest-price', text: 'بیشترین مبلغ' },
  { key: 'lowest-price', text: 'کمترین مبلغ' },
]

function Transaction() {
  const [filters, setFilters] = useState<Filters>(filterObject);
  const [activeSort, setActiveSort] = useState<string>(sortList[0].key);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [filterIsVisible, setFilterIsVisible] = useState<boolean>(false);

  useEffect(() => {
    fetch('/src/json.json')
      .then(response => response.json())
      .then(json => {
        setTransactions(json.Data)
        setFilteredTransactions(json.Data)
      })
  }, []);


  const handleFilterDrawer = useCallback((bool: boolean) => setFilterIsVisible(bool), []);

  const handleChangeSort = (event: React.MouseEvent<HTMLFormElement>): void => {
    const target = event.target as HTMLTextAreaElement;
    setActiveSort(target.id);
  }

  const handleClickFilter = (key: string, value: boolean | string): void => {
    setFilters(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  const handleCancelFilters = (): void => {
    setFilters(filterObject);
    setFilterIsVisible(false);
    setFilteredTransactions(transactions);
  }

  const handleSubmitFilter = (): void => {
    const newTransactions = transactions
      .filter((transaction: Transaction) => {
        if (filters.IsPay !== null) {
          return filters.IsPay === transaction.IsPay
        }
        return true
      })
      .filter((transaction: Transaction) => {
        if (filters.PayType !== null) {
          return filters.PayType === transaction.PayType
        }
        return true
      })
    setFilteredTransactions(newTransactions);
    setFilterIsVisible(false);
  }

  return (
    <>
      <PageTitle title="تراکنش‌ها" back />

      <TransactionList
        activeSort={activeSort}
        transactions={filteredTransactions}
        handleCancelFilters={handleCancelFilters}
      />

      <TransactionFooter
        filterIsVisible={filterIsVisible}
        handleCancelFilters={handleCancelFilters}
        handleSubmitFilter={handleSubmitFilter}
        handleClickFilter={handleClickFilter}
        filters={filters}
        sortList={sortList}
        activeSort={activeSort}
        handleChangeSort={handleChangeSort}
        handleFilterDrawer={handleFilterDrawer}
      />
    </>
  )
}

export default Transaction;
