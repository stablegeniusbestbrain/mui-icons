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
        _react2.default.createElement('path', { d: 'M203.1 158.3c5.2-11.2 8.1-23.5 8.1-36.7 0-49.5-40.1-89.6-89.6-89.6S32 72.1 32 121.6s40.1 89.6 89.6 89.6c13.2 0 25.5-2.9 36.7-8.1l52.9 52.9-52.9 52.9c-11.2-5.2-23.5-8.1-36.7-8.1-49.5 0-89.6 40.1-89.6 89.6S72.1 480 121.6 480s89.6-40.1 89.6-89.6c0-13.2-2.9-25.5-8.1-36.7l52.9-52.9 156.8 156.8H480v-22.4L203.1 158.3zm-81.5 8.1c-24.6 0-44.8-19.9-44.8-44.8S97 76.8 121.6 76.8s44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm0 268.8c-24.6 0-44.8-19.9-44.8-44.8s20.2-44.8 44.8-44.8 44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm134.4-168c-6.3 0-11.2-4.9-11.2-11.2 0-6.3 4.9-11.2 11.2-11.2 6.3 0 11.2 4.9 11.2 11.2 0 6.3-4.9 11.2-11.2 11.2zM412.8 54.4L278.4 188.8l44.8 44.8L480 76.8V54.4h-67.2z' })
      )
    )
  );
};

exports.default = Icon;