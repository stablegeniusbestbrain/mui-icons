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
        _react2.default.createElement('circle', { cx: '256', cy: '79.838', r: '48' }),
        _react2.default.createElement('path', { d: 'M424 144H88c-13.255 0-24 10.745-24 24s10.745 24 24 24h98.45c5.58 1 13.198 3.837 17.217 14.252 4.65 12.056 2.37 33.606-.54 51.727l-3.774 21.394c-.02.104-.04.207-.058.31l-.004.02-30.374 172.27c-2.303 13.052 6.414 25.5 19.467 27.802 13.055 2.3 25.333-6.416 27.634-19.47L237 340.347v.167S243.25 308 255.452 308h1.096C269 308 275 340.515 275 340.515v-.083l20.983 119.913c2.3 13.055 14.663 21.75 27.718 19.448 13.054-2.303 21.73-14.762 19.426-27.814L312.73 279.702c-.002-.008-.013-.02-.015-.027-.02-.104-.044-.217-.063-.322l-3.777-21.414c-2.91-18.12-5.19-39.63-.54-51.688C312.354 195.838 319.97 193 325.548 192H424c13.255 0 24-10.745 24-24s-10.745-24-24-24z' })
      )
    )
  );
};

exports.default = Icon;