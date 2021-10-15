const date = new Date();
const expenses = [
    {
        id: '1',
        description: 'Gum',
        note: 'Tasty Gum',
        amount: 195,
        createdAt: new Date(date.setTime(0))
    },
    {
        id: '2',
        description: 'Coffee',
        note: 'Salted Caramel Coffee',
        amount: 500,
        createdAt: new Date(date.setTime(-1000))
    },
    {
        id: '3',
        description: 'Rent',
        note: 'Last Month Rent',
        amount: 2500,
        createdAt: new Date(date.setTime(1000))
    }
]

export default expenses;