<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h1> BelSTU FIT </h1>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Средний бал</th>
            <th>Год рождения</th>
          </tr>
          <xsl:for-each select="main/student">
             <xsl:sort select="yearofbirth" order = "descending"/>
                <xsl:choose>
                    <xsl:when test="passingscore &lt; 6">    
                        
                        <tr bgcolor="red">
            
                            <td>
                                <xsl:value-of select="secondname"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="firstname"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="thirdname"/>
                            </td>

                            <td>
                                <xsl:value-of select="passingscore"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="yearofbirth"/>
                            </td>
                        
                        </tr>

                    </xsl:when>

                    <xsl:when test="passingscore = 6">    
                        
                        <tr bgcolor="green">
            
                            <td>
                                <xsl:value-of select="secondname"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="firstname"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="thirdname"/>
                            </td>

                            <td>
                                <xsl:value-of select="passingscore"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="yearofbirth"/>
                            </td>
                            
                            </tr>

                    </xsl:when>

                    <xsl:otherwise>
                        <tr>
                
                            <td>
                                <xsl:value-of select="secondname"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="firstname"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="thirdname"/>
                            </td>

                            <td>
                                <xsl:value-of select="passingscore"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="yearofbirth"/>
                            </td>
                            
                        </tr>
                    </xsl:otherwise>

                </xsl:choose>
            </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
