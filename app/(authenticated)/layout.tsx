import React from 'react';

// Uncomment these imports when ready to implement
import {UserProvider} from '@auth0/nextjs-auth0/client';
// import { AuthWrapper } from '@/components/Auth/AuthWrapper';
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from '@/redux/store';
// import { RecoilRoot } from 'recoil';
// import ErrorBoundary from '@/components/ErrorManagement/ErrorBoundary';

export default function AuthenticatedLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <div className="authenticated-layout">
            {children}
        </div>
    );
}


/*
export default function AuthenticatedLayout({
                                                children,
                                            }: {
    children: React.ReactNode
}) {
    return (
        <UserProvider>
            <ErrorBoundary>
                <ReduxProvider store={store}>
                    <RecoilRoot>
                        <AuthWrapper>
                            <div className="authenticated-layout">
                                {children}
                            </div>
                        </AuthWrapper>
                    </RecoilRoot>
                </ReduxProvider>
            </ErrorBoundary>
        </UserProvider>
    );
}
*/
