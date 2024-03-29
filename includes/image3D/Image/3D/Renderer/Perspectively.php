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
 * @version   CVS: $Id: Perspectively.php,v 1.8 2008/12/02 14:20:11 clockwerx Exp $
 * @link      http://pear.php.net/package/PackageName
 * @since     File available since Release 0.1.0
 */

// {{{ Image_3D_Renderer_Perspectively

/**
 * Image_3D_Renderer_Perspectively
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
class Image_3D_Renderer_Perspectively extends Image_3D_Renderer
{
    
    // {{{ _calculateScreenCoordiantes()

    /**
     * Caclulate Screen Coordinates
     *
     * Calculate perspectively screen coordinates for a point
     *
     * @param Image_3D_Point $point Point to process
     *
     * @return  void
     */
    protected function _calculateScreenCoordiantes(Image_3D_Point $point)
    {
        $viewpoint = 500.;
        $distance  = 500.;
        
        $point->setScreenCoordinates($viewpoint * $point->getX() / ($point->getZ() + $distance) + $this->_size[0],
                                     $viewpoint * $point->getY() / ($point->getZ() + $distance) + $this->_size[1]);
    }
    
    // }}}
    // {{{ _sortPolygones()

    /**
     * Sort polygones
     *
     * Sort the polygones depending on their medium depth
     *
     * @return  void
     */
    protected function _sortPolygones()
    {
        $polygoneDepth = array();
        foreach ($this->_polygones as $polygon) {
            $polygoneDepth[] = $polygon->getMidZ();
        }

        array_multisort($polygoneDepth, SORT_DESC, SORT_NUMERIC, $this->_polygones);
    }

    // }}}
}

// }}}
