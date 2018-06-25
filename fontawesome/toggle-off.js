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
      _react2.default.createElement('path', { d: 'M13.7 12q0-1.4-.5-2.7t-1.5-2.1-2.2-1.5-2.6-.6-2.7.6T2 7.2.5 9.3 0 12t.5 2.7T2 16.8t2.2 1.5 2.7.6 2.6-.6 2.2-1.5 1.5-2.1.5-2.7zM24 12q0-1.4-.5-2.7T22 7.2t-2.2-1.5-2.7-.6H12q1.6 1.2 2.5 3t.9 3.9-.9 3.9-2.5 3h5.1q1.4 0 2.7-.6t2.2-1.5 1.5-2.1.5-2.7zm1.7 0q0 1.7-.7 3.3t-1.8 2.8-2.7 1.8-3.4.7H6.9q-1.8 0-3.4-.7T.8 18.1-1 15.3t-.7-3.3.7-3.3T.8 5.9t2.7-1.8 3.4-.7h10.2q1.8 0 3.4.7t2.7 1.8T25 8.7t.7 3.3z' })
    )
  );
};

exports.default = Icon;