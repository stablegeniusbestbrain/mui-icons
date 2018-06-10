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
        _react2.default.createElement('path', { d: 'M427.3 416l34.3-34.3c3.1-3.1 3.1-8.2 0-11.3-3.1-3.1-8.2-3.1-11.3 0L416 404.7l-27.3-27.3c17.2-25.5 27.3-56.3 27.3-89.4 0-49.4-22.4-93.6-57.6-123L448 76v76c0 4.4 3.6 8 8 8s8-3.6 8-8V56c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8s3.6 8 8 8h76l-90.7 91.2C319.8 138 289.1 128 256 128c-33.1 0-63.8 10-89.3 27.2l-27.2-27.4 33.2-33.2c3.1-3.1 3.1-8.2 0-11.3-3.1-3.1-8.2-3.1-11.3 0l-33.2 33.2L76 64h76c4.4 0 8-3.6 8-8s-3.6-8-8-8H56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8s8-3.6 8-8V76l52.5 52.2-35.2 35.2c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l35.2-35.2 25.8 25.6C118.4 194.4 96 238.6 96 288c0 88.4 71.6 160 160 160 49.4 0 93.7-22.4 123-57.7l25.7 25.7-34.3 34.3c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l34.3-34.3 34.3 34.3c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3c3.1-3.1 3.1-8.2 0-11.3L427.3 416zm-69.5-26.2C330.6 417 294.5 432 256 432s-74.6-15-101.8-42.2C127 362.6 112 326.5 112 288s15-74.6 42.2-101.8C181.4 159 217.5 144 256 144s74.6 15 101.8 42.2C385 213.4 400 249.5 400 288s-15 74.6-42.2 101.8z' })
      )
    )
  );
};

exports.default = Icon;