function LoginComponent(){
	var that = this;
	//html模板部分
	var tpl = [
		'<style type="text/css">',
		'body,html{margin:0;padding:0;}#regCover{font-size:24px;font-family: "Microsoft YaHei","Hiragino Sans GB","微软雅黑","宋体",Arial,Verdana,sans-serif;z-index:900;position:fixed;top:0;left:0;width:100%;min-width:580px;height:100%;overflow-x:hidden;background-color:rgba(20,20,20,0.5)}#regCover .reg{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:480px;height:605px;border-radius:20px}#regCover #regClose{position:absolute;display:block;right:-48px;top:-38px;width:53px;height:53px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNJREFUeNrsmrFr20AUxhW7dGgKzSBsKGRICPVq6NKxW2ZDphY8eTYZ5c1bC83g5A8wXtqxHbI0W8diUzubcQhkCNS0lJCA3ZLGifodvIPXV8uOpLOjXPrgN+hkvXvfSXf3fHcLvu87Bs0Fz8EzkANPQBY8BGlwCQbgGzgAPfAZfAI/TAWxYEBUBrwAL8FT5TOCDxXEF/AWvAPfb0qUehMVEnMv4De/wVdwBn6CB+AReAzuBzwzInGv6E1GaCKICokL6uDK/9e6YBsUwApIB/hI0/0C/b47xtcV1eOGjTGsoCI4EZUPQA3kIzQQJ09+BsL/CdVrXNQiaIjKhqAKlmKKkSyR36Gor0FxGBGVAW1RwXuwbFiMZJnq4dameGKJWgWHzOkvUJqxGEmJ6tV2SHFFEpURgvoG+k2c/tYXwjJhRS2KT25q68wB+dW0g/pYkIOGeEM3LYgL64vB41qiiqIP5RMiiH+KvI8Vp4lyxTxUSpggPnjwecydJKouhm0nwfDhvh4kKsdSn+Ec5iET89iQpVQ5fS/F0sAKy7DfgGMn2XZMcToUd0UmtGrMv2C5XJjURyWlTVCO2fJl8lMImVLpXPFCz1365ib7Pmshg2myZ72Igjzmoxny2Rp7dpOLarEb+Qgt7McQ5onnyxGGeG0tLcplA0TXQEuHEebFbBBNlw0YrirYYE63Y/SJsAGaEuRQ3No2VMEWKyjE7OzXDdSkID1YadtSBbusYMXA/DEtYNOCHIpb264q6NHF+YQ1BVPCZiFIr3mck8+eKjiliyPDM74U8HFGgjRH5PdUXYzoYn8GqYznjzdvBnXtk+9RilZOHVqXM22vwZ4o26Ny06bjT6doKdihhUbT5oF1UbZO5aZNx39pbZ+ycvSzcp6yMqOwMvezMku38v9U3H++raT+87VyjUIuNVcTvjymqY5bgrZ+3U9tGjdYHrWT8HW/HZbvNf7a9L4La+lW7npYuz+ldxI7Cd9J7ITdSVRkE77nm426O7+W0N35tbjnKLLiU5znOYoPot7OpDd050+8WHs26VadIrPyvN//k5m35QztHwEGAIyqrqnvWIMsAAAAAElFTkSuQmCC);background-size:cover;cursor:pointer}#regCover .header{height:80px;width:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAABQCAYAAADBaaZUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZDlkZTFiNi0wYzlmLTBhNGEtODM5MS0wNTkyYTg3ZTJjYjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTBBREQ5NDMwREUzMTFFN0I4MzdEMDBBMTE5Rjg4QTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTBBREQ5NDIwREUzMTFFN0I4MzdEMDBBMTE5Rjg4QTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzhhOGUwZjYtYzI5Zi00YTQwLWI5ZjMtMDcxMzE0ZGUxM2QzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBkOWRlMWI2LTBjOWYtMGE0YS04MzkxLTA1OTJhODdlMmNiNiIv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)}#regCover .main{position:relative;top:-2px;height:525px;width:100%;background-color:#fbfbfb;border-radius:0 0 20px 20px}#regCover .logo{position:absolute;left:0;right:0;margin:0 auto;top:-74px;width:148px;height:148px;box-sizing:border-box;border:7px #fff solid;background-color:#dedede;border-radius:50%}#regCover .logo-img{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}#regCover .title{position:absolute;top:36px;left:0;right:0;margin:0 auto;font-size:30px;text-align:center}#regCover .wrapper{height:60px;width:380px;position:absolute;left:0;right:0;margin:0 auto;box-sizing:border-box;border-radius:10px}#regCover .wrapper img{position:absolute;top:0;bottom:0;margin:auto 0 auto 23px;cursor:pointer}#regCover .wrapper input{position:absolute;margin:0;padding:0;top:0;bottom:0;margin:auto 0 auto 63px;width:280px;font-size:18px;padding-left:18px;color:#999;height:32px;line-height:18px;border:none;border-left:1px solid #d8d8d8;outline:none;background-color:#fbfbfb}#regCover .username,#regCover .password,#regCover .verification{border:1px solid #ccc}#regCover .username{top:118px}#regCover .password{top:208px}#regCover .verification{left:50px;top:298px;width:190px;margin:0}#regCover .verification input{width:100px}#regCover .verification .no-clear{font-size:12px;position:absolute;left:343px;top:8px;display:block;width:200px}#regCover .verification .change-another{font-size:12px;left:343px;top:32px;color:#723073;text-decoration:underline;position:absolute;width:200px;cursor:pointer}#regCover .verification .ver-img{position:absolute;top:0;bottom:0;left:223px;margin:auto 0;width:108px;height:38px}#regCover .error-tips{position:absolute;font-size:12px;color:#e0463a;left:73px}#regCover .username-error{top:186px}#regCover .password-error{top:276px}#regCover .ver-error{top:366px}#regCover .login{top:388px;background-color:#723073;font-size:26px;line-height:60px;text-align:center;color:#fff;cursor:pointer}',
		'</style>',
		'<div class="reg">',
		'	<span id="regClose"></span>',
		'	<div class="logo">',
//		'		<img class="logo-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAK7UExURUxpcV01eMi2SGElc1lHglZakFsweHAxc3czclw/fWUsc2UrcmYoc0sxe1wydlcsd1tFgdW2N5tqWl0lbmAmctS6JUoqcM6pOkowenIvc4ycf9G0KNaXKdSeLFF6qlpBfk0tbtGhM9apKnFDfM6dLMyOLUw9gll+pmFOgl4jc9aWKNamKtS3LdaSKEoteGYoc8i1RpqeflVYlG8vclduoNaQJ826O0yDssSmR019rX2Sk00pW9eXKNaQKNGsKtW3LbetYE1VnmRVilswanwzdMuZKk9PjVUgbritXqqnbmyLoFJwokcseE1/rkowetS+QpU5cV0jc2Akc2Mmc3Auc2coc3czctaQKGsrc24sc3Mwc2Ilc2Unc3Uxc2kpc3Q3ckgmV4k4cmk1cm42coQ2cn03co03ck1+rXQ7d3M/eXk2cnY0c4E3cm5Og3BJf0smWnY3dVlCf1szdtPAJNeZKGAzdUyDsZA4cmZekFYyeNahKVd1o5s7cVExeXJEfGRik9WpKIiWkdO7JWtTh5M5ctaVKK+qc9adKFBzpMW2Wcq5U11unXgyck95qWhZjGQ1dFRglVsic2BrmsCzYMibMNG3J2Fml8yoK7StbWGHplJ8qsaUMFdOh6A9cdalKsqgL7mvaFJrnVNmmVR5p1pxoJ2hgtWyLFqEqVZVjKqnd9S8LVFvoYGTls+7TXuQmE2NuE2ItM6uKdWuKsukK1QrYaalelOCrZQ5cU0ye2eJo22LodbFRbqvYmtXic2rKdXBRFcgc5iehHKNnj53t3ePnJKbi5WdiEgodUMtetK+R9G0J6Kjfo2Zjs+xKM64PdS3LEZ8sdeJKNK7NX0yc8CyVMSJLls7eta+QUkfb1s4d66pa+nRNGAvaYExctO8Qd7GPVxZj1x6pX08dktJim1ijmNxnJ6Ta0Vdrlhom8+ghUQAAADFdFJOUwBW/tf+/jML7hlilKqBQyXd/gd7u5Se/u7KD4swWFqyxEfOUYN//jWT7bvmr+rR6NNWsfCSrGLbGatC5pfPhPCb1PXv7/7+/unLzvr+///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+///////////////////+ApVcZwAACopJREFUaN6tmfdbU2kWx4OEYACxwKgwgnVtq6NjGXVmdsr23QdCqgQIYAAFRQWkWbBEUaIGJco4UiKCIggMZJAOLmUBO7JSBin2Mn/Gnve23EYShPMjz3M/n/d7zntv3nsRCOwq7wU+3322ZsmSP0ItWbL622U+C+YIpqq8fT5f8v2tW9XV1SdOnLh27drhw4czMjKS1q5etngKJFu/WvP906dPb2GCakyAG5KSTp8+vXazz+Qci9c8Kysre4oZqpkRkjBDYODabxd8Mv6r9c8QnxBweoQLoFYv/kR8T88zyjCOADd8imLx+mnTKMHJkw8JPHsIhCAwcPPEGuX9Q38/JihLTCwre/asp2c2KkhxAtEZQyDrDxPgf/nPfiSA9fdM6++/fPns2XO/PGiFCgh4MXt29bUMrFiCwD/ZHeKH6y0t/dOA3TJ85syZq9dxQQBWra3NrS9mVx9OSkpi9sj+EFv/NTwM/P7h2uLi2jNXr15vgQjnwPBbQAAlCZh9DQkCWbXZDv7XtbeB31Lb3dX+qPY2CgAGPAJlAEdz87y/3YFJQIT/YUW0aavN9j+qHW4ZLtbputqLHxEGTgRUzT3Zd37+z69QsLMyUBjMs9bGIL5sL7493F5Rqevq6gYDJrhKRaBX64vsAmR48tNPJxMTE2Enox2WcTrQxyq/q722uKKjUqd7jAnIJl3mGloDCrLvYIYnD8GBJFid/Mxa/3XdxbqmpsqKCt3jx0SE25YIv9CnENBagEf49clDzACVCBpr/BUVj7s7c5o6KysriAjFViI0z8srwCMgAW44aXX93p06XWNJU0dHJ1+Ey+wISMCOYJUv+HdlZUlJY2NTh30RmnvystkRrPI3dXTU1eXkNDY1MSPU0iPQtiomKCDGjEewyv+6sSm6t64EGTo6O+2I0PoiD0X4mYxggz+nJCe317+upCQHb5IlwiNaBMbd1prNjGCVL9hWdyMz2t+fHYG4267SHhiWHhUMZGM7FY/wuVX+ipRMfSYYLBEwQ3fxI9hF+BMVJnCOEaF53gAtgnW+YEtmOSYgI6Am6bq6u3QVlR2NOehPlbr24bMPXjY/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"/>',
		'	</div>',
		'	<div class="header"></div>',
		'	<div class="close"></div>',
		'	<div class="main">',
		'		<div class="title">账号密码登陆</div>',
		'		<div class="wrapper username">',
		'			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI1NDg3MERCMEFDOTExRTdBRDY4RTg3QzM4NTdBQ0NCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1NDg3MERDMEFDOTExRTdBRDY4RTg3QzM4NTdBQ0NCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjU0ODcwRDkwQUM5MTFFN0FENjhFODdDMzg1N0FDQ0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjU0ODcwREEwQUM5MTFFN0FENjhFODdDMzg1N0FDQ0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7XC8OWAAABXUlEQVR42mJkIALcuHFDG0i1ArELELMA8Skg7tDQ0NhGSC8jEYbbAqmdQMyJRToFaMlcsi0AGs4GpG4DsRwOJR9BckBLPuEyg4mABxzwGA4C/FA1DORaIEVEFAlRYsE3Iiz4QYkFX4mw4BslFgQQYYEvJRZ8p3UQ3SLCgnuUWADKREfxyIPkZpBtATADgYLoIB4lB6FqyPYBCCwB4n9YxP9B5RgosgDowutAah0WqbVQOQZKfQACP7GI/SFGI0ELgAUeE44iQwoox0J2cQ01OAyIy4HYAIeyO9B6YgkwuP4QtABoKIivAcQeQJwOxOpEBuETIJ4FxJuA+BLQsv8YFgANtwNSE/G4llhwAYjzgZYcglsANNwNSG2FVofUAKDg8gZasosRaDgPkHMXiMUYqAteAbEyKCJjaWA4A9TMWCZCxS2FwJeJCpGKDxiALJCkoQWSIAv20tCCvQABBgAvMlLeiSf2ngAAAABJRU5ErkJggg=="/>',
		'			<input type="text" placeholder="手机号/邮箱/用户名"/>',
		'		</div>',
		'		<span class="error-tips username-error"></span>',
		'		<div class="wrapper password">',
		'			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAaCAYAAABYQRdDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3RkYzNjk3MEFDOTExRTdBNzZFQjZENUZCNkZENzNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI3RkYzNjk4MEFDOTExRTdBNzZFQjZENUZCNkZENzNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjdGRjM2OTUwQUM5MTFFN0E3NkVCNkQ1RkI2RkQ3M0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjdGRjM2OTYwQUM5MTFFN0E3NkVCNkQ1RkI2RkQ3M0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz49NMwBAAABiElEQVR42rSVv0sDMRiGc6UgopNautjFQYs46VIQQXDQSdzEgogiImIR/xq7WXGQOjrXHyAWLIgVFIqzi1XQRXS4Wp/AVwihV680/eDhTS5f3vsuyd15KiAqlcossgEzMAwevMA1ZJPJ5E3QXK+JWQ9yBMuqdWRhF/OaPRBtknxoGH7CMTyCDxOwBgOwDT+w37JSqpxDCtK9hwUqqVo5ceQCxqEOk+SUzZyIdZNNo71qG+rg2iuybhS1ZefYptOiZSY/BS0mYyWkMT4faMpj9SMJ6ZbU/3EnOsLc3qBKh4x2NYTph9GO/7f7OmohTE/1Mkn7Pcj0V7URrGsRKTYbi8p6ap0y53BtSbUXb3DLzXyPyWN0zmBUdR7PsKg3KufIUIlPTpumlNtIRVQXIqzpAxyIOjG90ieDXd2RE3LpwrTQ+GaKnrswTXPsBuU8a027MNXfzYy0M9J3slFd2f2EpS1Dv6b1Nt7tWNhK/ZCmsZB5vjbNO17SfFR+XN+wAn0dmH3BCez9CTAAEMxkYP+Y6BwAAAAASUVORK5CYII=" alt="" />',
		'			<input type="password" placeholder="密码" id="" value="" />',
		'		</div>',
		'		<span class="error-tips password-error"></span>',
		'		<div class="wrapper verification">',
		'			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAcCAYAAACK7SRjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0OThGMzlDMEFDOTExRTdBRjRDOUIxQUZCQTU2MDI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0OThGMzlEMEFDOTExRTdBRjRDOUIxQUZCQTU2MDI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQ5OEYzOUEwQUM5MTFFN0FGNEM5QjFBRkJBNTYwMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ5OEYzOUIwQUM5MTFFN0FGNEM5QjFBRkJBNTYwMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7u38oEAAABwElEQVR42uyWTShEURSAx28UpixNUVJGFOsxSikLkUTNajaSzZS1pPxsyI5GyYaajUbJyMZCzUIWCpPV2FjYKTT+IkzjOzkyZX7uY2bn1te97869333z3jmnZ7MZtmg02gin0GK6p8BAWkw3AvNghyeYBr/T6XyxLEco863QD8NQm2LZFazBDhxxUPyHHJGf/h3KoRLqoFnv0rQ9yz3BBTzAHZSJPGHLUyu05bH9yy/zIb/VUO2C+1zK9zRkDyEMVbmST0EPVMA+OKw+lkSaZBkkG2fpq/XuHVZf6DI0wUnSnDzTbsRbJF4p422otxotb7CL5JzepQddQwdzB7pmAdqzVsU06S8HjCJb10JmZ3yn4z4tVr+O8xKpeIjG5SJJLBGxYiWJYhl+n0O4CEV6PQM1hu6YyCNZFo3BBgc00PsshGtE5CGDhUNwpo/LtIVEHoBHg8XlFsTiCxTysm4YTOa4IE6K9ytaliCYI3FQfZ+hyCkS617Y/KNY9nvV9x3nTLzSeWAC4halcd3nUU/GT4s2TXuXgVhKrg9pxChDdaEbBuA4jfRYf3enEht9cek/6ZRaA71S1GAVYTjbvg8BBgC17Yt+ph1UDQAAAABJRU5ErkJggg==" alt="" />',
		'			<input type="text" placeholder="验证码" maxlength="4" id="" value="" />',
		'			<img class="ver-img" src="img/ver_img.png"/>',
		'			<span class="no-clear">看不清</span>',
		'			<span class="change-another">换一张</span>',
		'		</div>',
		'		<span class="error-tips ver-error"></span>',
		'		<div class="wrapper login">登陆</div>',
		'	</div>',
		'</div>'
	].join("");
	this.trigger = function(webId,funSub){
		if(document.querySelector('#regCover')){
			loginCom.showAlert();
		}else{
			loginCom.init(webId,funSub);			
			loginCom.showAlert();
		}
	}
	//html模板添加至页面
	this.init = function(webId,funSub){
		if(!webId){
			alert('请配置网站标示');
		}
		if(funSub){
			that.funSub = funSub;
		}
		document.body.style.overflow = 'hidden';
		this._regCover = document.createElement('div');
		this._regCover.setAttribute('id','regCover');
		this._regCover.style.display = 'none';
		this._regCover.innerHTML = tpl;
		document.querySelector('body').appendChild(this._regCover);		
		var _regCover =this._regCover;
		/*
		*
		* 获取操作元素
		* 
		*/
		var _reg = document.querySelector('#regCover .reg');
		function initTransform(t){
			setTimeout(function(){
				var deviceWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
				var deviceHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
				if(deviceHeight<760*deviceWidth/580&&deviceWidth<580){
					_reg.style.top = 760*deviceWidth/580 - deviceHeight +'px';
				}else if(deviceHeight<760&&deviceWidth>=580){
					_reg.style.top = 760 - deviceHeight +'px';
				}else{
					_reg.style.top = '0px';
				}
//				alert(deviceWidth+','+deviceHeight);
				if(deviceWidth<580){
					_regCover.style.transformOrigin = '0 0';
					_regCover.style.webkitTransformOrigin = '0 0';
					_regCover.style.msTransformOrigin = '0 0';
					_regCover.style.transform = 'scaleX('+ deviceWidth/580 +')';
					_regCover.style.webkitTransform = 'scaleX('+ deviceWidth/580 +')';
					_regCover.style.msTransform = 'scaleX('+ deviceWidth/580 +')';
					
					_reg.style.transformOrigin = '0 50%';
					_reg.style.webkitTransformOrigin = '0 50%';
					_reg.style.msTransformOrigin = '0 50%';
					_reg.style.transform = 'scaleY('+ deviceWidth/580 +')';
					_reg.style.webkitTransform = 'scaleY('+ deviceWidth/580 +')';
					_reg.style.msTransform = 'scaleY('+ deviceWidth/580 +')';
				}else{
					_regCover.style.transformOrigin = '';
					_regCover.style.webkitTransformOrigin = '';
					_regCover.style.msTransformOrigin = '';
					_regCover.style.transform = '';
					_regCover.style.webkitTransform = '';
					_regCover.style.msTransform = '';
					
					_reg.style.transformOrigin = '';
					_reg.style.webkitTransformOrigin = '';
					_reg.style.msTransformOrigin = '';
					_reg.style.transform = '';
					_reg.style.webkitTransform = '';
					_reg.style.msTransform = '';
				}				
			},t)
		}
		initTransform(0);
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize",function(){initTransform(310)});
		//关闭按钮
		var _close = document.querySelector('#regClose');
		//用户名框及input
		var _usernameWrapper = document.querySelector('#regCover .wrapper.username');
		var _usernameInput = document.querySelector('#regCover .wrapper.username input');
		//密码框及input
		var _passwordWrapper = document.querySelector('#regCover .wrapper.password');
		var _passwordInput = document.querySelector('#regCover .wrapper.password input');
		//验证码框及input
		var _verWrapper = document.querySelector('#regCover .wrapper.verification');
		var _verInput = document.querySelector('#regCover .wrapper.verification input');
		//图形验证码及点击更新按钮
		var _verImg = document.querySelector('#regCover .wrapper.verification .ver-img');
		var _changeAnother = document.querySelector('#regCover .wrapper.verification .change-another');
		//登陆按钮
		var _loginBtn = document.querySelector('#regCover .wrapper.login');
		//提示框
		var _errorTips = document.querySelectorAll('#regCover .error-tips');
		var usernameTip = document.querySelector('#regCover .username-error');
		var passwordTip = document.querySelector('#regCover .password-error');
		var verificationTip = document.querySelector('#regCover .ver-error');
		var _regCover = this._regCover;
		/*
		*
		* 预设文本
		* 
		*/
		var errorText = {
			'username' : {
				'empty':'*账号不能为空',
				'error':'账号格式不正确',
				'nothave':'账号不存在'
			},
			'password':{
				'empty':'*密码不能为空',
				'error':'密码格式不正确'
			},
			'verification':{
				'empty':'*验证码不能为空',
				'error':'验证码输入错误',
				'false':'获取验证码失败'
			},
			'totle':{
				'error':'账号或密码错误',
				'notAllow':'禁止登陆',
				'try':'登陆失败,请稍后尝试'
			}
		};
		var _imgId = '';
		var _uniqueID = '';
		function radomTimeId(){
			var n = Math.floor(Math.random()*11);
			var k = Math.floor(Math.random()* 1000000);
			var m = String.fromCharCode(n)+k;
			var dataId = Date.parse(new Date());
			strRadomTimeId = m.toString()+dataId.toString();
			_uniqueID = strRadomTimeId;
			_imgId = 'channel=' + webId + '&uniqueID=' + strRadomTimeId;
		}
		function initVerImg(){
			radomTimeId();
			var url = 'http://www.test.com/widget-captcha?' + _imgId +'&time=' + (Date.parse(new Date())+Math.floor(Math.random()* 1000000));
			_verImg.setAttribute('src',url)
		}
		initVerImg();
		function changeVerImg(){
			console.log(_imgId);
			var url = 'http://www.test.com/widget-captcha?' + _imgId +'&time=' + (Date.parse(new Date())+Math.floor(Math.random()* 1000000));
			_verImg.setAttribute('src',url)
		}
		this.changeVerImg = changeVerImg;
		function initEmpty(){
			_usernameInput.value = '';
			_passwordInput.value = '';
			_verInput.value = '';
		}
		//控件关闭
		function hideAlert(){
			_regCover.style.display = 'none';
			document.body.style.overflow = '';
			initEmpty();
		};
		//控件显示
		function showAlert(){
			changeVerImg();
			_regCover.style.display = 'block';
			document.body.style.overflow = 'hidden';
		};
		this.showAlert = showAlert;
		this.hideAlert = hideAlert;
		//所有提示置为初始状态
		function initTips(){
			_usernameWrapper.style.borderColor = '#ccc';
			_passwordWrapper.style.borderColor = '#ccc';
			_verWrapper.style.borderColor = '#ccc';
			for(var i = 0 ;i<_errorTips.length;i++){
				_errorTips[i].innerText = '';
			}
		};
		function initTipMessage(el,type){
			switch(el){
			case 'username':
				var elTip = usernameTip;
				var elWrapper = _usernameWrapper;
				break;
			case 'password':
				var elTip = passwordTip;
				var elWrapper = _passwordWrapper;
				break;
			case 'verification':
				var elTip = verificationTip;
				var elWrapper = _verWrapper;
				break;
			case 'totle':
				var elTip = verificationTip;
				break;
			}
			elTip.innerText = errorText[el][type];
			if(elWrapper){
				elWrapper.style.borderColor = '#e0463a';
			}
		};
		this.initTipMessage = initTipMessage;
		//兼容ie8去两侧空格
		function trim(value){
			return value.replace(/^\s*|\s*$/g,'');
		};
		//验证是否为空
		function isEmpty(value){
			if(value==null||value==''){
				return true;
			}else{
				return false;
			}
		};
		function verIsLegal(value){
			var reg = /^[\w]{4}$/g;
			return reg.test(value);
		}
		//关闭登陆层
		_close.onclick = hideAlert;
		//更换验证码
		 _verImg.onclick = changeVerImg;
		 _changeAnother.onclick = changeVerImg;
		//登陆点击
		_loginBtn.onclick = function(){
			var formValue = {
				usernameValue : trim(_usernameInput.value),
				passwordValue : trim(_passwordInput.value),
				verValue : trim(_verInput.value)
			}
			initTips();
			if(isEmpty(formValue.usernameValue)){
				initTipMessage('username','empty');
				return;
			}else if(isEmpty(formValue.passwordValue)){
				initTipMessage('password','empty');
				return;
			}else if(isEmpty(formValue.verValue)){
				initTipMessage('verification','empty');
				return;
			}else if(!verIsLegal(formValue.verValue)){
				initTipMessage('verification','error');
				return;
			}else{
				formValue.verValue = formValue.verValue.toLowerCase();
				that.ajax({
					method:'POST',
					url:'http://www.test.com/widget-login?channel='+webId+'&uniqueID='+_uniqueID,
					data:{
						username : formValue.usernameValue,
						password : formValue.passwordValue,
						code : formValue.verValue
						//用户名、密码、验证码等
					},
					success:funSub
				})
			}
		}
		//geng
	};
	
//	ajax({
//     method: 'POST',
//     url: 'test.php',
//     data: {
//         name1: 'value1',
//         name2: 'value2'
//     },
//     success: function (response) {
//        console.log(response)；
//     }
// });
	this.ajax = function ajax(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || true;
        opt.data = opt.data || null;
        opt.success = opt.success || function () {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }var params = [];
        for (var key in opt.data){
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        xmlHttp.withCredentials=true;
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
             xmlHttp.send(postData);
        }
         else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        };
//      var errorText = {
//			'username' : {
//				'empty':'*账号不能为空',
//				'error':'账号格式不正确',
//				'nothave':'账号不存在'
//			},
//			'password':{
//				'empty':'*密码不能为空',
//				'error':'密码格式不正确'
//			},
//			'verification':{
//				'empty':'*验证码不能为空',
//				'error':'验证码输入错误',
//				'false':'获取验证码失败'
//			},
//			'totle':{
//				'error':'账号或密码错误'
//				'notallow':'禁止登陆'
//			}
//		};
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				var resData = JSON.parse(xmlHttp.responseText);
//				console.log(resData);
//自行配置错误状态
//				switch(resData.retCode){
//					case(0):
//					loginCom.hideAlert();
//					loginCom.funSub();
//					break;
//					case():
//					loginCom.initTipMessage('username','nothave');
//					break;
//					case():
//					loginCom.initTipMessage('totle','error');
//					break;
//					case():
//					loginCom.initTipMessage('verification','error');
//					break;
//					case():
//					loginCom.initTipMessage('totle','notallow');
//					break;
//					case():
//					loginCom.initTipMessage('totle','try');
//					break;
//				}
				loginCom.changeVerImg();
            }
        };
    }
};
var loginCom = new LoginComponent();