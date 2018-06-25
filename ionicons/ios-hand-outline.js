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
        _react2.default.createElement('path', { d: 'M273 63.9c10.5 0 19 8.5 19 18.9v132.6c0 4.4 3.6 8 8 8s8-3.6 8-8V98.8c0-10.4 8.5-18.9 19-18.9s19 8.5 19 18.9v148.5c0 4.4 3.6 8 8 8s8-3.6 8-8V146.7c0-10.4 8.5-18.9 19-18.9s19 8.5 19 18.9V361c0 50.8-28.6 87-70.2 87h-51.5c-21.5 0-36.6-11.1-36.6-11.1-38.9-23.4-84.8-88.6-102-108.4-17.9-20.5-35.1-38.2-24.2-49 5.6-5.3 11.7-7.8 18.1-7.8 12.2 0 26.2 8.5 41.5 22.2l24.9 21.7V114.8c0-10.4 8.5-18.9 19-18.9s19 8.5 19 18.9v116.6c0 4.4 3.6 8 8 8s8-3.6 8-8V82.9c0-10.4 8.5-19 19-19m-.1-15.9C253.6 48 238 63.6 238 82.9v2.6c-5-3.5-12-5.6-19-5.6-19.3 0-35 15.7-35 34.9v165.5c-19-16.9-35.2-24.5-50.3-24.5-10.9 0-20.8 4.1-29.3 12.1l-.2.1-.2.1c-5.7 5.7-13.7 18.2-2.5 38.1 5.1 8.9 13.2 18.2 21.8 28 1.3 1.5 2.7 3.1 4.1 4.6 3.5 4 8.6 10.5 14.6 18 23.1 29.2 58.1 73.6 90.9 93.5 3.8 2.6 21.1 13.7 45.3 13.7h51.5c25 0 47.4-11 63.1-30.4C408 415.1 416 389.7 416 361V146.7c0-19.2-15.7-34.9-35-34.9-7 0-13 2.1-19 5.6V98.8c0-19.2-15.8-34.9-35.1-34.9-7.9 0-15.2 2.6-21.1 7.1-4.9-13.4-17.8-23-32.9-23z' })
      )
    )
  );
};

exports.default = Icon;