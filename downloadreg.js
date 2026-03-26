 function downloadReg() {
    let regContent = "Windows Registry Editor Version 5.00\n\n";

    // Example entries (you can edit/add more)
    regContent += "; Enable Firewall\n";
    regContent += "[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\StandardProfile]\n";
    regContent += "\"EnableFirewall\"=dword:00000001\n\n";

    regContent += "; Enable Windows Defender\n";
    regContent += "[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows Defender]\n";
    regContent += "\"DisableAntiSpyware\"=dword:00000000\n\n";

    // Create file and download it
    const blob = new Blob([regContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "SecurityFix.reg";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}