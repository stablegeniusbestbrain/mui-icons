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
        _react2.default.createElement('path', { d: 'M256 181.8c40.9 0 74.3 33.3 74.3 74.3 0 40.9-33.3 74.2-74.3 74.2-19.9 0-38.5-7.7-52.5-21.7s-21.7-32.6-21.7-52.5c-.1-41 33.3-74.3 74.2-74.3m0 130.5c31.1 0 56.4-25.3 56.4-56.4 0-31.1-25.3-56.4-56.4-56.4s-56.4 25.3-56.4 56.4c0 31.1 25.3 56.4 56.4 56.4m0-146.5c-49.9 0-90.3 40.4-90.3 90.3s40.4 90.2 90.3 90.2 90.3-40.4 90.3-90.2c0-49.9-40.4-90.3-90.3-90.3zm0 130.5c-22.3 0-40.4-18.1-40.4-40.4 0-22.3 18.1-40.4 40.4-40.4s40.4 18.1 40.4 40.4c0 22.3-18.1 40.4-40.4 40.4z' }),
        _react2.default.createElement('path', { d: 'M256 64c25.9 0 51.1 5.1 74.7 15.1 22.9 9.7 43.4 23.5 61 41.2s31.5 38.2 41.2 61c10 23.7 15.1 48.8 15.1 74.7s-5.1 51.1-15.1 74.7c-9.7 22.9-23.5 43.4-41.2 61s-38.2 31.5-61 41.2C307 442.9 281.9 448 256 448s-51.1-5.1-74.7-15.1c-22.9-9.7-43.4-23.5-61-41.2-17.6-17.6-31.5-38.2-41.2-61C69.1 307.1 64 281.9 64 256s5.1-51.1 15.1-74.7c9.7-22.9 23.5-43.4 41.2-61 17.6-17.6 38.2-31.5 61-41.2C204.9 69.1 230.1 64 256 64m0 322c34.7 0 67.4-13.5 91.9-38.1S386 290.7 386 256s-13.5-67.4-38.1-91.9S290.7 126 256 126s-67.4 13.5-91.9 38.1S126 221.3 126 256s13.5 67.4 38.1 91.9S221.3 386 256 386m0-338C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 322c-63 0-114-51.1-114-114s51-114 114-114 114 51 114 114-51 114-114 114z' })
      )
    )
  );
};

exports.default = Icon;