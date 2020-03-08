import React from 'react';
import { DragSelector, IDragSelector } from '@mornya/drag-selector-libs';
import '@mornya/drag-selector-libs/dist/drag-selector.scss';
import './App.scss';

interface IData {
  name: string;
  isSelected: boolean;
}

const data: IData[] = Array(50).fill(null).map(() => ({
  name: 'ITEM',
  isSelected: false,
}));
[3, 6, 11, 24, 29, 32, 33, 40, 49].forEach(item => {
  data[item].name = 'INITIALLY SELECTED ITEM';
  data[item].isSelected = true;
});

interface IState {
  data: IData[];
  isActive: boolean;
}

/**
 * This is an app of entries.
 *
 * React-Router v4 example:
 *
 * <div>
 *   <Route exact path="/" component={Home}>
 *   <Route path="/about" component={About}/>
 *   <Switch>
 *     <Redirect from="/me/project1" to="/project/1"/>
 *     <Redirect from="/me/project2" to="/project/2"/>
 *   </Switch>
 *   <Route exact path="/project" component={Project} />
 *   <Route path="/project/:no" component={Project} />
 * </div>
 */
export default class App extends React.Component {
  ds: IDragSelector | null = null;
  readonly state: IState = {
    data,
    isActive: true,
  };

  setAllSelection = (flag: boolean) => () => {
    if (this.ds) {
      this.ds.setAllSelection(flag);
    }
  };

  toggleActive = () =>
    this.setState(
      { isActive: !this.state.isActive },
      () => this.ds?.setActive(this.state.isActive),
    );

  componentDidMount () {
    this.ds = new DragSelector('.drag-selector', {
      data: this.state.data.map(item => item.isSelected),
      isAllowOverSelection: false,
      onSelected: (data) => {
        const mergeData = this.state.data.map((item, index) => ({
          ...item,
          isSelected: data[index],
        }));
        this.setState({ data: mergeData }, () => console.log(this.state.data));
      },
    });
  }

  render () {
    return (
      <div className="app-wrapper">
        <nav>
          <p>({this.state.data.filter(item => item.isSelected).length} items selected)</p>
          <button type="button" onClick={this.setAllSelection(true)}>ADD ALL</button>
          <button type="button" onClick={this.setAllSelection(false)}>SUB ALL</button>
          <button type="button" onClick={this.toggleActive}>TOGGLE ACTIVE</button>
          <span>{`${this.state.isActive ? ' Actived' : ' Deactived'}`}</span>
        </nav>

        <section>
          <div className="drag-selector">
            {this.state.data.map((item, index) =>
              <div
                key={index}
                className="drag-selector-item"
                data-selected={item.isSelected}
              >
                <div>Item #{index + 1}</div>
                <div className={`item-flag${item.isSelected ? ' on' : ''}`}>
                  <span role="img" aria-label="heart">❤️</span></div>
              </div>,
            )}
          </div>
        </section>

        <header>
          <h1>React Demo</h1>
          <h2>Drag Selector library</h2>
          <p>This is NPM <code>@mornya/drag-selector-libs</code> sample demo app!</p>
          <br/>
          <a
            href="https://npmjs.com/search?q=mornya"
            target="_blank"
            title="Go NPM registry"
            rel="noopener noreferrer"
          >
            Go NPM registry
          </a>
          <br/><br/><br/>
        </header>

        <footer>
          Copyright 2019 by mornya. All rights reserved.
        </footer>
      </div>
    );
  }

  componentWillUnmount () {
    this.ds?.destroy();
  }
}
