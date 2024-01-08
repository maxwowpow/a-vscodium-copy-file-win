param (
    [string[]]$filePaths
)

Add-Type -AssemblyName System.Windows.Forms

$fileList = New-Object System.Collections.Specialized.StringCollection
foreach ($filePath in $filePaths) {
    $fileList.Add($filePath)
}
[System.Windows.Forms.Clipboard]::SetFileDropList($fileList)
