'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M25.7 5.1H24v13.8h1.7V24h-5.1v-1.7H3.4V24h-5.1v-5.1H0V5.1h-1.7V0h5.1v1.7h17.2V0h5.1v5.1zm-3.4-3.4v1.7H24V1.7h-1.7zM0 1.7v1.7h1.7V1.7H0zm1.7 20.6v-1.7H0v1.7h1.7zm18.9-1.7v-1.7h1.7V5.1h-1.7V3.4H3.4v1.7H1.7v13.8h1.7v1.7h17.2zm3.4 1.7v-1.7h-1.7v1.7H24zM15.4 8.6h5.2v10.3h-12v-3.5H3.4V5.1h12v3.5zM5.1 13.7h8.6V6.9H5.1v6.8zm13.8 3.4v-6.8h-3.5v5.1h-5.1v1.7h8.6z' })
    )
  );
};

exports.default = Icon;