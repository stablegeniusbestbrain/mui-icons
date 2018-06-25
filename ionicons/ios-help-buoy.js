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
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm135.8 72.2c17.6 17.6 31.5 38.2 41.2 61 2.7 6.3 5 12.8 7 19.4l-101.1 6.8c-8.2-14-19.9-25.7-33.9-34l6.5-101.3c6.5 2 13 4.3 19.3 7 22.8 9.7 43.3 23.5 61 41.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zM120.2 120.2c17.6-17.6 38.2-31.5 61-41.2 6.3-2.7 12.8-5 19.3-7l6.5 101.3c-13.9 8.3-25.6 20-33.9 33.9L72 200.5c2-6.5 4.3-13 7-19.3 9.8-22.8 23.6-43.3 41.2-61zm0 271.6c-17.6-17.6-31.5-38.2-41.2-61-2.7-6.3-5-12.8-7-19.3l101.3-6.5c8.2 13.9 19.9 25.5 33.8 33.8L200.5 440c-6.5-2-13-4.3-19.3-7-22.8-9.8-43.3-23.6-61-41.2zm271.6 0c-17.6 17.6-38.2 31.5-61 41.2-6.3 2.7-12.8 5-19.3 7l-6.7-101.1c14.1-8.3 25.8-20.1 34.1-34.2l101.1 6.8c-2 6.5-4.3 13-7 19.4-9.8 22.7-23.6 43.2-41.2 60.9z' })
      )
    )
  );
};

exports.default = Icon;