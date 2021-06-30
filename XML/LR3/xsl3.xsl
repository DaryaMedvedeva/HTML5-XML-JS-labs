<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h1> BelSTU FIT </h1>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th>NAME</th>
            <th>BALL</th>
          </tr>
          <xsl:for-each select="MAIN/UNIVERSITY/FACULTY/SPECIALIZATION">
            <tr>
              <td>
                <xsl:value-of select="NAME"/>
              </td>
              <td>
                <xsl:value-of select="BALL"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
