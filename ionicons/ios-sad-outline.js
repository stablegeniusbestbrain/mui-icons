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
        _react2.default.createElement('path', { d: 'M256 64c25.9 0 51.1 5.1 74.7 15.1 22.9 9.7 43.4 23.5 61 41.2 17.6 17.6 31.5 38.2 41.2 61 10 23.7 15.1 48.8 15.1 74.7s-5.1 51.1-15.1 74.7c-9.7 22.9-23.5 43.4-41.2 61-17.6 17.6-38.2 31.5-61 41.2-23.7 10-48.8 15.1-74.7 15.1s-51.1-5.1-74.7-15.1c-22.9-9.7-43.4-23.5-61-41.2-17.6-17.6-31.5-38.2-41.2-61C69.1 307.1 64 281.9 64 256s5.1-51.1 15.1-74.7c9.7-22.9 23.5-43.4 41.2-61 17.6-17.6 38.2-31.5 61-41.2C204.9 69.1 230.1 64 256 64m0-16C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z' }),
        _react2.default.createElement('circle', { cx: '328', cy: '224', r: '24' }),
        _react2.default.createElement('circle', { cx: '184', cy: '224', r: '24' }),
        _react2.default.createElement('path', { d: 'M256 271c-48.3 0-88 35-96 81h192c-8-46-47.7-81-96-81z' })
      )
    )
  );
};

exports.default = Icon;