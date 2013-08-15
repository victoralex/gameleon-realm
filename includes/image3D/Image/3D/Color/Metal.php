<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * 3d Library
 *
 * PHP versions 5
 *
 * LICENSE: 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category  Image
 * @package   Image_3D
 * @author    Kore Nordmann <3d@kore-nordmann.de>
 * @copyright 1997-2005 Kore Nordmann
 * @license   http://www.gnu.org/licenses/lgpl.txt lgpl 2.1
 * @version   CVS: $Id: Metal.php,v 1.6 2008/12/02 12:39:42 clockwerx Exp $
 * @link      http://pear.php.net/package/PackageName
 * @since     File available since Release 0.1.0
 */

require_once 'Image/3D/Color.php';

/**
 * Image_3D_Color_Metal
 *
 * @category  Image
 * @package   Image_3D
 * @author    Kore Nordmann <3d@kore-nordmann.de>
 * @copyright 1997-2005 Kore Nordmann
 * @license   http://www.gnu.org/licenses/lgpl.txt lgpl 2.1
 * @version   Release: @package_version@
 * @link      http://pear.php.net/package/PackageName
 * @since     Class available since Release 0.1.0
 */
class Image_3D_Color_Metal extends Image_3D_Color
{
    
    protected $_metal;

    public function setMetal($metal)
    {
        $this->_metal = (float) $metal;
    }
    
    protected function _mixColor()
    {
        $this->_rgbaValue[0] = min(1, $this->_rgbaValue[0] * $this->_light[0] + $this->_metal * $this->_light[0]);
        $this->_rgbaValue[1] = min(1, $this->_rgbaValue[1] * $this->_light[1] + $this->_metal * $this->_light[1]);
        $this->_rgbaValue[2] = min(1, $this->_rgbaValue[2] * $this->_light[2] + $this->_metal * $this->_light[2]);
    }
}

