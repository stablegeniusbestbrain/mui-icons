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
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('path', { d: 'M390.7 99.7c-2.8-2.4-6.4-3.7-10.2-3.7-4.6 0-9 2-11.9 5.5-2.7 3.2-4 7.2-3.7 11.4.3 4.2 2.3 8 5.5 10.7 39.5 33.5 62.2 82.1 62.2 133.3 0 96.9-79.2 175.8-176.6 175.8S79.4 353.8 79.4 256.9c0-51.3 22.7-99.9 62.2-133.3 3.2-2.7 5.2-6.5 5.5-10.7.3-4.2-1-8.2-3.7-11.4-3-3.5-7.3-5.5-11.9-5.5-3.7 0-7.3 1.3-10.2 3.7C74.7 139.1 48 196.4 48 256.9 48 371.1 141.3 464 256 464s208-92.9 208-207.1c0-60.5-26.7-117.8-73.3-157.2z' }),
          _react2.default.createElement('path', { d: 'M257 272c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16z' })
        )
      )
    )
  );
};

exports.default = Icon;