/* eslint-env node */
/* eslint react/sort-prop-types: "off" */
/* eslint react/forbid-prop-types: "off" */


exports.__esModule = true

const _extends2 = require('babel-runtime/helpers/extends')

const _extends3 = _interopRequireDefault(_extends2)

const _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties')

const _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2)

const _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

const _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

const _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn')

const _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2)

const _inherits2 = require('babel-runtime/helpers/inherits')

const _inherits3 = _interopRequireDefault(_inherits2)

const _classnames = require('classnames')

const _classnames2 = _interopRequireDefault(_classnames)

const _react = require('react')

const _react2 = _interopRequireDefault(_react)

const _propTypes = require('prop-types')

const _propTypes2 = _interopRequireDefault(_propTypes)

const _SafeAnchor = require('react-bootstrap/lib/SafeAnchor')

const _SafeAnchor2 = _interopRequireDefault(_SafeAnchor)

const _createChainedFunction = require('react-bootstrap/lib/utils/createChainedFunction')

const _createChainedFunction2 = _interopRequireDefault(_createChainedFunction)

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

const propTypes = {
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  href: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  eventKey: _propTypes2.default.any,
}

const defaultProps = {
  active: false,
  disabled: false,
}

const NavItem = (function (_React$Component) {
  (0, _inherits3.default)(NavItem, _React$Component)

  function NavItem(props, context) {
    (0, _classCallCheck3.default)(this, NavItem)

    const _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context))

    _this.handleClick = _this.handleClick.bind(_this)
    return _this
  }

  NavItem.prototype.handleClick = function handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault()
    } else {
      this.props.onSelect(this.props.eventKey, e)
    }
  }

  NavItem.prototype.render = function render() {
    let _props = this.props,
      active = _props.active,
      disabled = _props.disabled,
      onClick = _props.onClick,
      className = _props.className,
      style = _props.style,
      props = (0, _objectWithoutProperties3.default)(_props, ['active', 'disabled', 'onClick', 'className', 'style'])


    delete props.onSelect
    delete props.eventKey

    // These are injected down by `<Nav>` for building `<SubNav>`s.
    delete props.activeKey
    delete props.activeHref

    if (!props.role) {
      if (props.href === '#') {
        props.role = 'button'
      }
    } else if (props.role === 'tab') {
      props['aria-selected'] = active
    }

    return _react2.default.createElement(
      'li',
      {
        role: 'presentation',
        className: (0, _classnames2.default)(className, { active, disabled }),
        style,
      },
      _react2.default.createElement(_SafeAnchor2.default, (0, _extends3.default)({}, props, {
        disabled,
        onClick: (0, _createChainedFunction2.default)(onClick, this.handleClick),
      })),
    )
  }

  return NavItem
}(_react2.default.Component))

NavItem.propTypes = propTypes
NavItem.defaultProps = defaultProps

exports.default = NavItem
module.exports = exports.default
