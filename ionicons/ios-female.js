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
        _react2.default.createElement('path', { d: 'M296 48c-92.8 0-168 75.2-168 168 0 43.5 16.5 83.2 43.7 113L112 388.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3l42.3 42.3-50.3 50.3c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l50.3-50.3 42.3 42.3c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3c3.1-3.1 3.1-8.2 0-11.3L123.3 400l59.7-59.7c29.8 27.1 69.5 43.7 113 43.7 92.8 0 168-75.2 168-168S388.8 48 296 48zm107.5 275.5C374.8 352.2 336.6 368 296 368s-78.8-15.8-107.5-44.5S144 256.6 144 216s15.8-78.8 44.5-107.5S255.4 64 296 64s78.8 15.8 107.5 44.5S448 175.4 448 216s-15.8 78.8-44.5 107.5z' })
      )
    )
  );
};

exports.default = Icon;