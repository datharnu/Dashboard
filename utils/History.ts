type HistoryList = {
  id: number;
  coin: string;
  date: string;
  price: string;
  amount: string;
  status: string;
};

export const Historys: HistoryList[] = [
  {
    id: 1,
    coin: "BTC",
    date: "24/07/21",
    price: "2,356,54",
    amount: "129,00",
    status: "Successful",
  },
  {
    id: 2,
    coin: "ETH",
    date: "12/06/21",
    price: "3,123,23",
    amount: "349,00",
    status: "Successful",
  },
  {
    id: 3,
    coin: "TTT",
    date: "22/05/21",
    price: "21,345,5",
    amount: "929,00",
    status: "Successful",
  },
  {
    id: 4,
    coin: "ETH",
    date: "17/04/21",
    price: "1,456,78",
    amount: "149,00",
    status: "Successful",
  },
  {
    id: 5,
    coin: "BTC",
    date: "15/03/21",
    price: "7,386,54",
    amount: "459,00",
    status: "Successful",
  },
  {
    id: 6,
    coin: "BTC",
    date: "30/02/21",
    price: "5,676,44",
    amount: "969,00",
    status: "Successful",
  },
];
