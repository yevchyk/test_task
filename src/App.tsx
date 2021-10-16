import React, {useEffect} from 'react';
import Layout from "components/Layout";
import theme from "lib/theme";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
      <PageTitle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path='/main'>
              
            </Route>
            <Route path='/second'>
              
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
      </BrowserRouter>
  );
}

const titleElem = document.head.querySelector('title') as HTMLTitleElement

function setTitle(title: string) {
  titleElem.innerText = title
}

function PageTitle() {
  const location = useLocation()
  const titles: Array<[string | RegExp, string]> = [
    ['/main', 'Main | Test Task'],
    ['/second', 'Second | Test Task'],
  ]
  useEffect(() => {
    for (const [template, title] of titles) {
      if (typeof template === 'string' && location.pathname.startsWith(template)) {
        setTitle(title)
        return
      }
      if (template instanceof RegExp && template.test(location.pathname)) {
        setTitle(title)
        return
      }
    }
    setTitle('Test Task')
  }, [location.pathname])
  return null
}

export default App;
