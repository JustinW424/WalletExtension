import { InjectedWindow } from '../types';
import BlankProvider from '../provider/BlankProvider';
import shimWeb3 from './shimWeb3';

const injectProvider = (provider: BlankProvider): void => {
    (window as Window & InjectedWindow).ethereum = provider;

    shimWeb3(provider);

    window.dispatchEvent(new Event('ethereum#initialized'));
};

export default injectProvider;
