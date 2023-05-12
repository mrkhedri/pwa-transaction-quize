import { useState, useCallback } from 'react';
import BottomDrawer from 'react-bottom-drawer';
import clsx from 'clsx';

import Button from 'src/components/Button';
import useStore from 'src/store/useStore';
import filterLight from 'src/assets/icons/light/Filter.svg';
import filterDark from 'src/assets/icons/dark/Filter.svg';
import sortLight from 'src/assets/icons/light/Sort.svg';
import sortDark from 'src/assets/icons/dark/Sort.svg';
import yesLight from 'src/assets/icons/light/Yes.svg';
import yesDark from 'src/assets/icons/dark/Yes.svg';
import noLight from 'src/assets/icons/light/No.svg';
import noDark from 'src/assets/icons/dark/No.svg';
import cardLight from 'src/assets/icons/light/Card.svg';
import cardDark from 'src/assets/icons/dark/Card.svg';
import walletLight from 'src/assets/icons/light/Wallet.svg';
import walletDark from 'src/assets/icons/dark/Wallet.svg';
import { SortItem, Filters } from '.';
import { StyledFooter, StyledSortDrawer, StyledFilterDrawer } from './styles';

interface Props {
  filterIsVisible: boolean
  filters: Filters
  sortList: SortItem[]
  activeSort: string
  handleChangeSort: (event: React.MouseEvent<HTMLFormElement>) => void
  handleClickFilter: (key: string, value: boolean | string) => void
  handleCancelFilters: () => void
  handleSubmitFilter: () => void
  handleFilterDrawer: (bool: boolean) => void
}

function TransactionFooter(props: Props) {
  const {
    filterIsVisible,
    activeSort,
    handleChangeSort,
    sortList,
    filters,
    handleClickFilter,
    handleCancelFilters,
    handleSubmitFilter,
    handleFilterDrawer,
  } = props;
  const mode = useStore(state => state.mode);
  const [sortIsVisible, setSortIsVisible] = useState<boolean>(false);

  const handleSortDrawer = useCallback((bool: boolean) => setSortIsVisible(bool), []);

  return (
    <>
      <StyledFooter>
        <div className="inner">
          <button onClick={() => handleFilterDrawer(true)}>
            <img src={mode === 'light' ? filterLight : filterDark} alt="filter-icon" />
            <span>فیلتر</span>
          </button>

          <span className="divider" />

          <button onClick={() => handleSortDrawer(true)}>
            <img src={mode === 'light' ? sortLight : sortDark} alt="sort-icon" />
            <span>مرتب سازی</span>
          </button>
        </div>
      </StyledFooter>
      
      <BottomDrawer
        duration={250}
        hideScrollbars={true}
        onClose={() => handleFilterDrawer(false)}
        isVisible={filterIsVisible}
        className="bottom-drawer"
      >
        <StyledFilterDrawer>
          <div className="title">فیلتر‌ها</div>

          <div className="filter">
            <span className="filter-type">نوع تراکنش:</span>
            <div className="select-filter">
              <button
                className={clsx({ active: filters.IsPay === true })}
                onClick={() => handleClickFilter('IsPay', true)}
              >
                <img src={mode === 'light' ? yesLight : yesDark} alt="success-icon" />
                <span className="text">موفق</span>
              </button>
              <button
                className={clsx({ active: filters.IsPay === false })}
                onClick={() => handleClickFilter('IsPay', false)}
              >
                <img src={mode === 'light' ? noLight : noDark} alt="fail-icon" />
                <span className="text">ناموفق</span>
              </button>
            </div>
          </div>

          <div className="filter">
            <span className="filter-type">نحوه تراکنش:</span>
            <div className="select-filter">
              <button
                className={clsx({ active: filters.PayType === 'کارت بانکی' })}
                onClick={() => handleClickFilter('PayType', 'کارت بانکی')}
              >
                <img src={mode === 'light' ? cardLight : cardDark} alt="card-icon" />
                <span className="text">کارت بانکی</span>
              </button>
              <button
                className={clsx({ active: filters.PayType === 'کیف پول' })}
                onClick={() => handleClickFilter('PayType', 'کیف پول')}
              >
                <img src={mode === 'light' ? walletLight : walletDark} alt="wallet-icon" />
                <span className="text">کیف پول</span>
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <div>
              <Button onClick={handleCancelFilters} color="secondary" variant="outlined">
                لغو همه فیلترها
              </Button>
            </div>
            <div>
              <Button onClick={handleSubmitFilter} color="primary">
                اعمال فیلتر
              </Button>
            </div>
          </div>
        </StyledFilterDrawer>
      </BottomDrawer>

      <BottomDrawer
        duration={250}
        hideScrollbars={true}
        onClose={() => handleSortDrawer(false)}
        isVisible={sortIsVisible}
        className="bottom-drawer"
      >
        <StyledSortDrawer>
          <div className="title">مرتب سازی</div>

          <form onChange={handleChangeSort}>
            {sortList.map(item => (
              <div key={item.key}>
                <input
                  type="radio"
                  id={item.key}
                  value={item.key}
                  name="sort"
                  checked={item.key === activeSort}
                />
                <label htmlFor={item.key}>{item.text}</label>
              </div>
            ))}
          </form>
        </StyledSortDrawer>
      </BottomDrawer>
    </>
  )
}

export default TransactionFooter;
