/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div className="header">
            <div className="logo-nav-wrapper">
              <div className="logo">
                <Logo />
              </div>
              <Navigation pathname={this.props.pathname} />
            </div>
            <div className="tools-search-wrapper">
              <LanguageSelector />
              {!this.props.token && (
                <div className="tools">
                  <Anontools />
                </div>
              )}
              <div className="search">
                <SearchWidget />
              </div>
            </div>
          </div>

          <header class="br-header mb-4" id="header" data-sticky="data-sticky">
            <div class="container-lg">
              <div class="header-top">
                <div class="header-logo">
                  <Logo />
                  <div class="header-sign">Assinatura</div>
                </div>
                <div class="header-actions">
                  <div class="header-links dropdown">
                    <button class="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido"><i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                    <div class="br-list">
                      <div class="header">
                        <div class="title">Acesso Rápido</div>
                      </div><a class="br-item" href="javascript:void(0)">Link de acesso 1</a><a class="br-item" href="javascript:void(0)">Link de acesso 2</a><a class="br-item" href="javascript:void(0)">Link de acesso 3</a><a class="br-item" href="javascript:void(0)">Link de acesso 4</a>
                    </div>
                  </div><span class="br-divider vertical mx-half mx-sm-1"></span>
                  <div class="header-functions dropdown">
                    <button class="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema"><i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div class="br-list">
                      <div class="header">
                        <div class="title">Funcionalidades do Sistema</div>
                      </div>
                      <div class="br-item">
                        <button class="br-button circle small" type="button" aria-label="Funcionalidade 1"><i class="fas fa-chart-bar" aria-hidden="true"></i><span class="text">Funcionalidade 1</span>
                        </button>
                      </div>
                      <div class="br-item">
                        <button class="br-button circle small" type="button" aria-label="Funcionalidade 2"><i class="fas fa-headset" aria-hidden="true"></i><span class="text">Funcionalidade 2</span>
                        </button>
                      </div>
                      <div class="br-item">
                        <button class="br-button circle small" type="button" aria-label="Funcionalidade 3"><i class="fas fa-comment" aria-hidden="true"></i><span class="text">Funcionalidade 3</span>
                        </button>
                      </div>
                      <div class="br-item">
                        <button class="br-button circle small" type="button" aria-label="Funcionalidade 4"><i class="fas fa-adjust" aria-hidden="true"></i><span class="text">Funcionalidade 4</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="header-search-trigger">
                    <button class="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search"><i class="fas fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div class="header-login">
                    <div class="header-sign-in">
                      <button class="br-sign-in small" type="button" data-trigger="login"><i class="fas fa-user" aria-hidden="true"></i><span class="d-sm-inline">Entrar</span>
                      </button>
                    </div>
                    <div class="header-avatar"></div>
                  </div>
                </div>
              </div>
              <div class="header-bottom">
                <div class="header-menu">
                  <div class="header-menu-trigger" id="header-navigation">
                    <button class="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="navigation"><i class="fas fa-bars" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div class="header-info">
                    <div class="header-title">Template básico</div>
                    <div class="header-subtitle">Subtítulo do Header</div>
                  </div>
                </div>
                <div class="header-search" id="main-searchbox">
                  <div class="br-input has-icon">
                    <label for="searchbox">Texto da pesquisa</label>
                    <input id="searchbox" type="text" placeholder="O que você procura?"/>
                    <button class="br-button circle small" type="button" aria-label="Pesquisar"><i class="fas fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                  <button class="br-button circle search-close ml-1" type="button" aria-label="Fechar Busca" data-dismiss="search"><i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
        </header>


        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
