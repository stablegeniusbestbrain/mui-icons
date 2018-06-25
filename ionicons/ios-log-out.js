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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M280 432H88c-22.1 0-40-17.9-40-40V120c0-22.1 17.9-40 40-40h192c22.1 0 40 17.9 40 40 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-13.2-10.8-24-24-24H88c-13.2 0-24 10.8-24 24v272c0 13.2 10.8 24 24 24h192c13.2 0 24-10.8 24-24 0-4.4 3.6-8 8-8s8 3.6 8 8c0 22.1-17.9 40-40 40z' }),
        _react2.default.createElement('path', { d: 'M459.3 246.7l-84.6-84.4c-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3L439 248H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h271l-73.7 74.4c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.5 3.6 2.3 5.7 2.3s4.1-.7 5.7-2.3l82.6-82.4c6.3-6.3 6.3-14.4 0-20.6z' })
      )
    )
  );
};

exports.default = Icon;