function main(){
    const nama_pasien = document.getElementById("nama_pasien").value;
    const tempat_lahir = document.getElementById("tempat_lahir").value;
    const tanggal_lahir = document.getElementById("tanggal_lahir").value;
    const jenis_kelamin = document.getElementById("jenis_kelamin").value;
    const alamat = document.getElementById("alamat").value;
    const RT = document.getElementById("RT").value;
    const RW = document.getElementById("RW").value;
    const provinsi = document.getElementById("provinsi").value;
    const kecamatan = document.getElementById("kecamatan").value;
    const kelurahan_desa = document.getElementById("kelurahan_desa").value;
    const no_tel = document.getElementById("no_tel").value;
    const kode_pos = document.getElementById("kode_pos").value;
    const agama = document.getElementById("agama").value;
    const pendidikan_terakhir = document.getElementById("pendidikan_terakhir").value;
    const pekerjaan = document.getElementById("pekerjaan").value;
    const hub = document.getElementById("hub").value;
    const nama_pj = document.getElementById("nama_pj").value;
    const pendidikan_pj = document.getElementById("pendidikan_pj").value;
    const pekerjaan_pj = document.getElementById("pekerjaan_pj").value;

    if(nama_pasien.length <= 0){
		alert("Isi Nama Pasien-mu!");
		return;
	}
    if(tempat_lahir.length <= 0){
		alert("Isi Tempat Lahir-mu!");
		return;
	}
    if(tanggal_lahir.length <= 0){
		alert("Isi Tanggal Lahir-mu!");
		return;
	}
    if(jenis_kelamin.length <= 0){
		alert("Isi Jenis Kelamin-mu!");
		return;
	}
    if(alamat.length <= 0){
		alert("Isi Alamat-mu!");
		return;
	}
    if(RT.length <= 0){
		alert("Isi RT-mu!");
		return;
	}
    if(RW.length <= 0){
		alert("Isi RW-mu!");
		return;
	}
    if(provinsi.length <= 0){
		alert("Isi Provinsi-mu!");
		return;
	}
    if(kecamatan.length <= 0){
		alert("Isi Kecamatan-mu!");
		return;
	}
    if(kelurahan_desa.length <= 0){
		alert("Isi Kelurahan/Desa-mu!");
		return;
	}
    if(no_tel.length <= 0){
		alert("Isi No. Tel/HP-mu!");
		return;
	}
    if(kode_pos.length <= 0){
		alert("Isi Kode Pos-mu!");
		return;
	}
    if(agama.length <= 0){
		alert("Isi Agama-mu!");
		return;
	}
    if(pendidikan_terakhir.length <= 0){
		alert("Isi Pendidikan Terakhir-mu!");
		return;
	}
    if(pekerjaan.length <= 0){
		alert("Isi Pekerjaan-mu!");
		return;
	}
    if(hub.length <= 0){
		alert("Isi Hubungan Dengan Pasien-mu!");
		return;
	}
    if(nama_pj.length <= 0){
		alert("Isi Nama Penanggung Jawab-mu!");
		return;
	}
    if(pendidikan_pj.length <= 0){
		alert("Isi Pendidikan P. Jawab-mu!");
		return;
	}
    if(pekerjaan_pj.length <= 0){
		alert("Isi Pekerjaan P. Jawab-mu!");
		return;
	}
	alert("Pendaftaran berhasil!");
}