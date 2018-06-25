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
        _react2.default.createElement('path', { d: 'M286 496c-6.1 0-11.8-2.3-16-6.6-3.2-3.3-7.1-9.1-7.1-18.6V351.4H249v119.4c0 9.5-4 15.4-7.4 18.7-4.3 4.2-10.1 6.5-16.3 6.5s-11.9-2.3-16.3-6.5c-3.4-3.3-7.4-9.1-7.4-18.7V351.4h-43.9l44.5-170.6h-6.8L171 271.2c-4 13.1-13.7 17.8-21.4 17.8-6.6 0-12.9-3.2-17-8.7-4.8-6.4-6.1-14.9-3.6-23.9l29-104.1c4.2-15.2 20.7-38.2 48.7-39.3h98.4c28.4 1.2 44.1 26 48.5 38.9l.1.4 29 104.3c2.4 9 1 17.6-3.9 24-4.1 5.4-10.4 8.6-16.9 8.6-7.7 0-17.3-4.8-21.3-18.1v-.2l-24.3-90.1h-7.7l45.5 170.6H309v119.4c0 9.5-3.9 15.3-7.1 18.6-4.2 4.3-9.8 6.6-15.9 6.6zm-30.1-389.6c-24.2 0-43.9-20.3-43.9-45.2S231.7 16 255.9 16s43.9 20.3 43.9 45.2-19.7 45.2-43.9 45.2z' })
      )
    )
  );
};

exports.default = Icon;