import AccountLanding from "../app/AccountLanding";

export const ROUTES = [
    {path: '/edit/:accountId', component: AccountEditor},
    {path: '/new', component: AccountEditor},
    {path: '/', component: AccountLanding},
];

export default routers