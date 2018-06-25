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
        _react2.default.createElement('path', { d: 'M256.282 339.488zM64 32l34.946 403.22L255.766 480l157.26-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.46-28.248L150.865 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.38 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z' })
      )
    )
  );
};

exports.default = Icon;