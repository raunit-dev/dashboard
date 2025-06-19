const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Raunit Jaiswal',
    email: 'raunitjaiswal510@gmail.com',
    password: 'solanalovesraunit15',
  },
];

const customers = [
  {
    id: 'a1e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@email.com',
    image_url: '/customers/aarav-sharma.png',
  },
  {
    id: 'b2e15827-7ee1-4961-8c5b-ea44a9bd81aa',
    name: 'Diya Patel',
    email: 'diya.patel@email.com',
    image_url: '/customers/diya-patel.png',
  },
  {
    id: 'c3e15927-6dd1-4961-8c5b-ea44a9bd81aa',
    name: 'Kabir Singh',
    email: 'kabir.singh@email.com',
    image_url: '/customers/kabir-singh.png',
  },
  {
    id: 'd4e16027-5cc1-4961-8c5b-ea44a9bd81aa',
    name: 'Isha Verma',
    email: 'isha.verma@email.com',
    image_url: '/customers/isha-verma.png',
  },
  {
    id: 'e5e16127-4bb1-4961-8c5b-ea44a9bd81aa',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@email.com',
    image_url: '/customers/rohan-mehta.png',
  },
  {
    id: 'f6e16227-3aa1-4961-8c5b-ea44a9bd81aa',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@email.com',
    image_url: '/customers/sneha-reddy.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 10200,
    status: 'pending',
    date: '2025-06-14',
  },
  {
    customer_id: customers[1].id,
    amount: 15600,
    status: 'pending',
    date: '2025-06-09',
  },
  {
    customer_id: customers[2].id,
    amount: 8900,
    status: 'paid',
    date: '2025-05-22',
  },
  {
    customer_id: customers[3].id,
    amount: 23400,
    status: 'paid',
    date: '2025-05-10',
  },
  {
    customer_id: customers[4].id,
    amount: 7600,
    status: 'pending',
    date: '2025-04-27',
  },
  {
    customer_id: customers[5].id,
    amount: 12750,
    status: 'paid',
    date: '2025-04-18',
  },
  {
    customer_id: customers[0].id,
    amount: 6100,
    status: 'paid',
    date: '2025-03-30',
  },
  {
    customer_id: customers[3].id,
    amount: 9850,
    status: 'paid',
    date: '2025-03-19',
  },
  {
    customer_id: customers[4].id,
    amount: 4200,
    status: 'pending',
    date: '2025-02-23',
  },
  {
    customer_id: customers[5].id,
    amount: 15900,
    status: 'paid',
    date: '2025-02-10',
  },
  {
    customer_id: customers[2].id,
    amount: 3700,
    status: 'paid',
    date: '2024-12-12',
  },
  {
    customer_id: customers[1].id,
    amount: 9400,
    status: 'pending',
    date: '2024-11-05',
  },
  {
    customer_id: customers[5].id,
    amount: 11400,
    status: 'paid',
    date: '2024-10-18',
  },
];

const revenue = [
  { month: 'Jan', revenue: 3800 },
  { month: 'Feb', revenue: 4200 },
  { month: 'Mar', revenue: 4600 },
  { month: 'Apr', revenue: 5100 },
  { month: 'May', revenue: 4850 },
  { month: 'Jun', revenue: 5700 },
  { month: 'Jul', revenue: 0 },   // future month
  { month: 'Aug', revenue: 0 },   // future month
  { month: 'Sep', revenue: 0 },   // future month
  { month: 'Oct', revenue: 0 },   // future month
  { month: 'Nov', revenue: 0 },   // future month
  { month: 'Dec', revenue: 0 },   // future month
];

export { users, customers, invoices, revenue };
