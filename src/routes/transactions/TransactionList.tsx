import { useState } from 'react';
import BottomDrawer from 'react-bottom-drawer';
import clsx from 'clsx';

import Button from 'src/components/Button';
import useStore from 'src/store/useStore';
import { addCommaSeperator, toPersianNum } from 'src/utils/number';
import yesLight from 'src/assets/icons/light/Yes.svg';
import yesDark from 'src/assets/icons/dark/Yes.svg';
import noLight from 'src/assets/icons/light/No.svg';
import noDark from 'src/assets/icons/dark/No.svg';
import emptyStateImage from 'src/assets/images/empty-state.png';
import { StyledWrapper, StyledCard, StyledEmpty, StyledTransactionDetailsDrawer } from './styles';
import { Transaction } from '.';

export interface Props {
  activeSort: string
  transactions: Transaction[]
  handleCancelFilters: () => void
}

function TransactionList(props: Props) {
  const mode = useStore(state => state.mode);
  const [transactionDetails, setTransactionDetails] = useState<Transaction|null>(null)
  const {
    transactions,
    activeSort,
    handleCancelFilters
  } = props;

  const handleOpenTransactionDetails = (transaction: Transaction): void => {
    setTransactionDetails(transaction);
  }

  const handleCloseTransactionDetails = (): void => setTransactionDetails(null);

  const handleClickShare = (): void => {
    if (navigator.share) {
      navigator.share({
        title: transactionDetails?.TypeName,
          url: 'https://google.com' // TODO: Sould be fix with the correct url
      })
    }
  }

  let sortedTransactions: Transaction[] = transactions;

  if (activeSort === 'time') {
    sortedTransactions = transactions;
  } else {
    sortedTransactions = transactions.slice().sort((a:Transaction, b:Transaction) => {
      return activeSort === 'lowest-price' ? a.Price - b.Price : b.Price - a.Price;
    })
  }

  const isEmpty = !sortedTransactions.length;

  return (
    <StyledWrapper>
      {sortedTransactions.map((transaction: Transaction, index: number) => (
        <StyledCard key={index}>
          <div className="header">
            <span className="title">{transaction.TypeName}</span>
            {transaction.IsPay ? (
              <span className="number">
                کد پیگیری:
                ۸۸۸۸۸۸۷۷۷۷۶۶
              </span>
            ) : (
              <span className="red-lable">ناموفق</span>
            )}
          </div>

          <span className={`status ${transaction.IsPay ? 'success' : 'error'}`} />

          <div className="footer">
            <span>
              <span className="price">
                {toPersianNum(addCommaSeperator(transaction.Price))}
              </span>
              <span className="currency">تومان</span>
            </span>

            <span>
              <span className="time">{toPersianNum(transaction.Date.split(' ')[1])}</span>
              <span className="date">{toPersianNum(transaction.Date.split(' ')[0])}</span>
              <Button
                onClick={() => handleOpenTransactionDetails(transaction)}
                color="secondary"
                variant="outlined"
                size="small"
              >
                جزيیات
              </Button>
            </span>
          </div>
        </StyledCard>
      ))}

      {isEmpty && (
        <StyledEmpty>
          <img src={emptyStateImage} alt="empty-state" />
          <span>تراکنشی با فیلتر اعمال شده یافت نشد، برای نمایش تراکنش‌ها فیلتر را تغییر دهید.</span>
          <Button
            onClick={handleCancelFilters}
            color="secondary"
            variant="outlined"
            size="small"
          >
           نمایش همه تراکنش‌ها
          </Button>
        </StyledEmpty>
      )}

      <BottomDrawer
        duration={250}
        hideScrollbars={true}
        onClose={handleCloseTransactionDetails}
        isVisible={Boolean(transactionDetails)}
        className="bottom-drawer"
      >
        <StyledTransactionDetailsDrawer>
          <div className="title">
            جزئیات تراکنش {' '}
            {transactionDetails?.IsPay ? (
              <>
                موفق
                <img src={mode === 'light' ? yesLight : yesDark} alt="success-icon" />
              </>
            ) : (
              <>
                ناموفق
                <img src={mode === 'light' ? noLight : noDark} alt="fail-icon" />
              </>
            )}
          </div>

          <div
            className={`receipt ${clsx({ success: transactionDetails?.IsPay, failure: !transactionDetails?.IsPay })}`}
          >
            <div className="inner">
              <div className="item">
                <span>مبلغ تراکنش:</span>
                <span>
                  <span className="price">
                    {toPersianNum(addCommaSeperator(transactionDetails?.Price || ''))}
                  </span>{' '}
                  <span>ریال</span>
                </span>
              </div>
              <div className="item">
                <span>سرویس تراکنش:</span>
                <span>{transactionDetails?.TypeName}</span>
              </div>
              {transactionDetails?.IsPay && (
                <div className="item">
                  <span>بازگشت به کیف پول:</span>
                  <span>۲۵۰ ریال</span>
                </div>
              )}
              <div className="item">
                <span>نحوه پرداخت:</span>
                <span>{transactionDetails?.PayType}</span>
              </div>
              <div className="item">
                <span>تاریخ تراکنش:</span>
                <span>{toPersianNum(transactionDetails?.Date.split(' ')[0] || '')}</span>
              </div>
              <div className="item">
                <span>زمان تراکنش:</span>
                <span>{toPersianNum(transactionDetails?.Date.split(' ')[1] || '')}</span>
              </div>
              {transactionDetails?.IsPay && (
                <div className="item">
                  <span>شماره همراه:</span>
                  <span>{toPersianNum(transactionDetails?.PhoneNumber || '')}</span>
                </div>
              )}
              <div className="item">
                <span>کدپیگیری:</span>
                <span>۹۱۲۳۴۵۶۷۸۹</span>
              </div>
            </div>
          </div>

          <Button onClick={handleClickShare}>
            اشتراک گذاری تراکنش
          </Button>
        </StyledTransactionDetailsDrawer>
      </BottomDrawer>
    </StyledWrapper>
  )
}

export default TransactionList;