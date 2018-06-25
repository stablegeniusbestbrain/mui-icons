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
        _react2.default.createElement('path', { d: 'M464 48L48 270.9l110.5 47.5L456.1 56.2 214.7 349.5l-1.1 87.4 41.6-57.9L372 464z' }),
        _react2.default.createElement('path', { d: 'M169.6 330.3L197.7 460h.4v-.5l2.9-118.7 150.3-175.1z' })
      )
    )
  );
};

exports.default = Icon;