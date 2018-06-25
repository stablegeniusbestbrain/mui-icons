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
        _react2.default.createElement('path', { d: 'M283.2 176l-17.8 59.4-6.2 20.6H312l-69.2 109.8 15.5-57.7 5.4-20.2h-72.8l24.9-112h67.4m21.5-15.9H203l-32 144h71.8L200 464l141-224h-60.3l24-80z' }),
        _react2.default.createElement('path', { d: 'M374.4 141.9l-13.3-.1C349.4 88.2 306 48 236 48S108.2 98.4 108.2 169.5l.3 4.8C66.3 179.9 32 219.6 32 264c0 47 37.9 88 84.7 88H214l4.2-16H116.7c-18 0-35.1-8.1-48.2-21.9-13-13.7-20.4-32.4-20.4-51 0-17.5 6.6-34.8 18.5-48.5 11.8-13.5 27.4-22.2 44.1-24.5l14.8-2-1-14.9-.3-4.3c.1-29.3 11.7-56.3 32.6-75.9 20.9-19.6 49-29.4 79.2-29.4 29.3 0 55 7.3 74.3 22.9 17.7 14.4 29.9 34.7 35.2 58.7l2.9 13.4c11.5-.7 26-.7 26-.7 24.5 0 47.1 8.6 63.7 24.1 16.7 15.6 25.8 37.2 25.8 60.8 0 44.7-33.7 84.7-76.8 91.8 0 0-8.9 1.4-20.2 1.4h-70.4l-10.2 16H367c72 0 113-52 113-110 0-58.6-47.3-100.1-105.6-100.1z' })
      )
    )
  );
};

exports.default = Icon;