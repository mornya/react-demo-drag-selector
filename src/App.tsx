import React, { useState, useEffect, useCallback, useRef } from 'react';
import { DragSelector, IDragSelector } from '@mornya/drag-selector-libs';
import '@mornya/drag-selector-libs/dist/drag-selector.scss';
import './App.scss';

type IData = {
  name: string;
  isSelected: boolean;
};
type Props = {};

const initialData: IData[] = Array(50).fill(null).map(() => ({
  name: 'ITEM',
  isSelected: false,
}));

[3, 6, 11, 24, 29, 32, 33, 40, 49].forEach(item => {
  initialData[item].name = 'INITIALLY SELECTED ITEM';
  initialData[item].isSelected = true;
});

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
const App: React.FC<Props> = (_props: Props) => {
  const [data, setData] = useState<IData[]>(initialData);
  const [isActive, setActive] = useState<boolean>(true);
  const ds = useRef<IDragSelector | null>(null);

  const setAllSelection = useCallback((flag: boolean) => () => {
    ds.current?.setAllSelection(flag);
  }, []);

  const toggleActive = useCallback(() => {
    ds.current?.setActive(!isActive);
    setActive(!isActive);
  }, [isActive]);

  useEffect(() => {
    return () => {
      ds.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!ds.current) {
      ds.current = new DragSelector('.drag-selector', {
        data: data.map(item => item.isSelected),
        isAllowOverSelection: false,
        onSelected: (selected) => {
          const mergeData = data.map((item, index) => ({
            ...item,
            isSelected: selected[index],
          }));
          setData(mergeData);
          console.info('Merged data:', mergeData);
        },
      });
    }
  }, [data]);

  return (
    <div className="app-wrapper">
      <nav>
        <div>
          <button type="button" onClick={setAllSelection(true)}>Add ALL</button>
          <button type="button" onClick={setAllSelection(false)}>Sub ALL</button>
          <button type="button" onClick={toggleActive}>Toggle Active</button>
        </div>
        <div>
          <p className="sel">({data.filter(item => item.isSelected).length} items selected)</p>
          <div className="act">{`${isActive ? 'Actived' : 'Deactived'}`}</div>
        </div>
      </nav>

      <section>
        <div className="drag-selector">
          {data.map((item, index) =>
            <div
              key={index}
              className="drag-selector-item"
              data-selected={item.isSelected}
            >
              <div>Item #{index + 1}</div>
              <div className={`item-flag${item.isSelected ? ' on' : ''}`}>
                <span role="img" aria-label="heart">❤️</span>
              </div>
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
        Copyright {new Date().getFullYear()}. mornya. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
