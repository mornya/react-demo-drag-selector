import React from 'react';
import { IDragSelector } from '@mornya/drag-selector-libs';
import '@mornya/drag-selector-libs/dist/drag-selector.scss';
import './App.scss';
interface IData {
    name: string;
    isSelected: boolean;
}
interface IState {
    data: IData[];
    isActive: boolean;
}
export default class App extends React.Component {
    ds: IDragSelector | null;
    readonly state: IState;
    setAllSelection: (flag: boolean) => () => void;
    toggleActive: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
}
export {};
